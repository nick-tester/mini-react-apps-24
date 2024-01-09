import React from "react";
import Person from "../components/Person";

const List = ({ people }) => {

    return (
        <section>
            {people.map(person => <Person key={person.id} {...person} />)}
        </section>
    )
};

export default List;