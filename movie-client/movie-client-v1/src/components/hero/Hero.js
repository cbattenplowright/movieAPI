import "./Hero.css";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ movies }) => {
    // creates an array of movie paper elements

    const mappedMovies = movies.map((movie) => {
        return (
            <Paper key={movie.id}>
                <div className="movie-card-container">
                    <div className="movie-detail">
                        <div className="movie-poster">
                            <img
                                src={movie.poster}
                                alt=""
                            />
                        </div>
                        <div className="movie-title">
                            <h4>{movie.title}</h4>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    });

    return (
        <div className="movie-carousel-container">
            <Carousel>{mappedMovies}</Carousel>
        </div>
    );
};

export default Hero;
