import React, { useState, useEffect } from "react";

const Form = ({ addTodo, editTodo, currentTodo }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const onSubmit = (e) => {
    if (currentTodo) {
      editTodo({ title, description });
    } else {
      addTodo({ title, description });
    }
    setTitle("");
    setDescription("");

    // As i was saving the To-Do title and discription my form was keep reloading, so i search out about it, to solve this with
    // "preventDefault()" method which will prevent default set to update!
    e.preventDefault();

    // Validated form using if condition whether its empty or not!
    if (title === "" || description === "") {
      alert("Write your to-do list for today!");
      return;
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
