export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-1 ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      >
        ✖
      </button>
    </li>
  );
}
