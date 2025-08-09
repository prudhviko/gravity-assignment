export default function Filter({ setFilter, currentFilter }) {
  const btnClass = (type) =>
    `px-3 py-1 rounded-lg transition ${
      currentFilter === type
        ? "bg-indigo-500 text-white"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }`;

  return (
    <div className="flex justify-center gap-2 mb-4">
      <button onClick={() => setFilter("all")} className={btnClass("all")}>
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={btnClass("completed")}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={btnClass("pending")}
      >
        Pending
      </button>
    </div>
  );
}
