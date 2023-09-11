import "./App.css";
import api from "./API/axiosConfig";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

function App() {
    const [movies, setMovies] = useState();

    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            const jsonData = await response.json();

            console.log(jsonData);
            setMovies(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return <div className="App"></div>;
}

export default App;
