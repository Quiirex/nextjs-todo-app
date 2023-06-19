'use client';

type TodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  createdAt: Date;
  toggleTodo: (id: string, isComplete: boolean) => void;
  removeTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  isComplete,
  createdAt,
  toggleTodo,
  removeTodo,
}: TodoItemProps) {
  return (
    <div className="border p-2 flex justify-between">
      <li className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer mr-2"
          defaultChecked={isComplete}
          onChange={(event) => toggleTodo(id, event.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          (@{createdAt.toLocaleString('sl-SI')})
        </label>
      </li>
      <button
        onClick={() => removeTodo(id)}
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Remove
      </button>
    </div>
  );
}
