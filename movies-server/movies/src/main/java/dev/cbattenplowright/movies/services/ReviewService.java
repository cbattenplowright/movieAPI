package dev.cbattenplowright.movies.services;

import dev.cbattenplowright.movies.models.Movie;
import dev.cbattenplowright.movies.models.Review;
import dev.cbattenplowright.movies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
//        Adds review to the database
        Review review = reviewRepository.insert(new Review(reviewBody));

//        Updates the movie with the corresponding imdbId provided with the review
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }

}
