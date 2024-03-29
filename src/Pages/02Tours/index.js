import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import "./styles.css";

const url = "https://course-api.com/react-tours-project";

const ToursPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    };

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const fetchedTours = await res.json();
            setTours(fetchedTours);
        } catch (err) {
            console.error(err);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (isLoading) {
        return <main>
            <Loading />
        </main>
    };

    if (tours.length === 0) {
        return <main>
            <div className="title">
                <h2>no tours left</h2>
                <button type="button" style={{ marginTop: "2rem" }} className="btn" onClick={fetchTours}>refresh</button>
            </div>
        </main>
    };

    return <main>
        <Tours tours={tours} removeTour={removeTour} />
    </main>
};

export default ToursPage;