import React, { useState } from "react";
import data from "./assets/data";
import List from "./components/List";
import "./assets/styles.css";

const BirthdayBuddy = () => {
    const [people, setPeople] = useState(data);

    return <main>
        <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
            <button type="button" className="btn btn-block" onClick={() => setPeople([])}>clear</button>
        </section>
    </main>
};

export default BirthdayBuddy;