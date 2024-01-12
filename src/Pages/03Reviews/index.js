import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./styles.css";
import people from "./assets/data";


const ReviewsPage = () => {
    const [index, setIndex] = useState(0);

    const subject = people[index];

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
            </article>
        </main>
    )
};

export default ReviewsPage;