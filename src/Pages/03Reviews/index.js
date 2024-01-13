import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./styles.css";
import people from "./assets/data";


const ReviewsPage = () => {
    const [index, setIndex] = useState(0);

    const subject = people[index];

    const prevPerson = () => {
        setIndex(currentIndex => {
            const newIndex = currentIndex - 1;
            return newIndex;
        });
    };

    const nextPerson = () => {
        setIndex(currentIndex => {
            const newIndex = currentIndex + 1;
            return newIndex;
        });
    };

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img src={subject.image} alt={subject.name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{subject.name}</h4>
                <p className="job">{subject.job}</p>
                <p className="info">{subject.text}</p>
                <div className="btn-container">
                    <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
                    <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
                </div>
            </article>
        </main>
    )
};

export default ReviewsPage;