import { useState } from "react";

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [editIndex, setEditIndex] = useState<number>(-1);
    const [array, setArray] = useState<string[]>([])

    const handleChange = (e: any) => {
        setTodo(e.target.value)
    }

    const handleSave = () => {
        if (editIndex === -1) {
            setArray([...array, todo]);
        } else {
            const updatedArray = [...array]; // Create a copy of the original array
            updatedArray[editIndex] = todo; // Update the value at the editIndex
            setArray(updatedArray); // Update the state with the updated array
            setEditIndex(-1); // Reset the editIndex state
        }

    }

    const handleEdit = (index: number) => {
        setTodo(array[index]); // Set the todo state to the value being edited
        setEditIndex(index); // Set the editIndex state to the index being edited
    }

    const handleDelete = (index: number) => {
        const updatedArray = [...array]; // Create a copy of the original array
        updatedArray.splice(index, 1); // Remove the item at the specified index
        setArray(updatedArray); // Update the state with the updated array
    };

    return (
        <div className=" min-h-screen items-center  p-20">
            <div className="w-full">
                <h3
                    className="w-full bg-white shadow-md rounded p-3"
                >
                    Simple To Do Application
                </h3>
            </div>

            <div className="w-full pt-4">
                <div className="w-full ">
                    <label htmlFor="">
                        New To Do
                    </label>

                    <input
                        type="text"
                        onChange={handleChange}
                        disabled={editIndex !== -1}
                    />
                    <button
                        onClick={() => {
                            handleSave()
                        }}
                    >
                        Save
                    </button>
                </div>
                <div className="w-full">
                    <div className="caption-top">
                        List of To-dos
                    </div>
                    <table className="w-full table-fixed border border-collapse border-cyan-700">
                        <thead className="border border-collapse border-cyan-700">
                            <tr>
                                <th className="border border-collapse border-cyan-700">
                                    TO DO
                                </th>
                                <th className="border border-collapse border-cyan-700">
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {array.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-collapse border-cyan-700">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={todo}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <p>{item}</p>
                                        )}
                                    </td>
                                    <td className="flex gap-6 justify-center border border-collapse border-cyan-700">
                                        <div>
                                            {editIndex === index ? (
                                                <button onClick={handleSave}>Update</button>
                                            ) : (
                                                <button onClick={() => handleEdit(index)}>Edit</button>
                                            )}
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => handleDelete(index)}
                                            >
                                                Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Todo;

