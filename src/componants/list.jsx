import {React} from "react";

const List = ({ todos, editTodo, deleteTodo }) => {
  return (
    <div className="mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.map((todo, index) => (
            <tr key={index}>
              <td className="text-lg font-medium text-gray-900 shadow overflow-hidden rounded-md px-6 py-4 flex justify-between items-center">
                {index + 1}
              </td>
              <td className="text-lg font-medium text-gray-900">
                {todo.title}
              </td>
              <td className="text-lg font-medium text-gray-900">
                {todo.description}
              </td>
              <td className="flex space-x-4">
                <button
                  onClick={() => editTodo(index)}
                  className="text-indigo-600 hover:text-indigo-900 font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-600 hover:text-red-900 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
