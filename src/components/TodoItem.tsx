'use client';

type TodoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleTodo: (id: string, isComplete: boolean) => void;
};

export function TodoItem({ id, title, isComplete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={isComplete}
        onChange={(event) => toggleTodo(id, event.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
