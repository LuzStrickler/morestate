import React, { useState } from 'react';

function Person() {
    const [person, setPerson] = useState({ name: 'John', age: 100, lastName: 'Doe' });

    const handleIncreaseAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    }

    const handleNameChange = (event) => {
        setPerson({ ...person, name: event.target.value });
    }

    const handleLastNameChange = (event) => {
        setPerson({ ...person, lastName: event.target.value });
    }

    const { name, age, lastName } = person;

    return (
        <>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>{`${name} ${lastName}`}</h1>
            <h2>{age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    )
}

export default Person;