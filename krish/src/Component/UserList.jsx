import React, { useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([
        { name: "Rahul", age: 21 },
        { name: "Roohit", age: 21 },
        { name: "Raj", age: 21 },
    ]);
    const [userNameInput, setNameUserInput] = useState('');
    const [userAgeInput, setAgeInput] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!userNameInput || !userAgeInput) return;

        const newUser = {
            name: userNameInput,
            age: parseInt(userAgeInput),
        };
        setUsers([...users, newUser]);
        setNameUserInput('');
        setAgeInput('');
    };

    const handleRemoveUser = (indexToRemove) => {
        setUsers(users.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 flex-1"
                    type="text"
                    value={userNameInput}
                    placeholder="Enter your name"
                    onChange={(e) => setNameUserInput(e.target.value)}
                />

                <input
                    className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 w-32"
                    type="number"
                    value={userAgeInput}
                    placeholder="Age"
                    onChange={(e) => setAgeInput(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Add User
                </button>
            </form>

            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="space-y-4">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">Name: {user.name}</h2>
                            <p className="text-gray-700">Age: {user.age}</p>
                        </div>
                        <button
                            onClick={() => handleRemoveUser(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
