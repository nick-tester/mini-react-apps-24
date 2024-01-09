import React, { useState } from "react";
import styled from "styled-components";

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">£{price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>
                {readMore ? info : `${info.substring(0, 200)}... `}
                <BUTTON type="button" className="info-btn" onClick={() => setReadMore(!readMore)}>
                    {!readMore ? " read more" : " read less"}
                </BUTTON>
            </p>
            <button
                type="button"
                className="btn btn-block delete-btn"
                onClick={() => removeTour(id)}>remove</button>
        </div>
    </article>
};

const BUTTON = styled.button`
    text-transform: lowercase;
    text-decoration: underline;
`

export default Tour;