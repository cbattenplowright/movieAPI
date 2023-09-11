import "./App.css";
import api from "./API/axiosConfig";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";

function App() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            const jsonData = await response.data;
            setMovies(jsonData);
            console.log(jsonData);
            console.log("This is working");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            <Routes>
                {/* when path is / will display Layout and Home routes */}
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        path="/"
                        element={<Home movies={movies} />}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
