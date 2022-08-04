import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        // data should be given as an object
        title,
        completed: false,
      });
      setTitle(""); // after storing the todo, reset the input field
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="btn_container">
            <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
