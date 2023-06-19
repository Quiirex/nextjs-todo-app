import Header from '@/components/Header';
import { TodoItem } from '@/components/TodoItem';
import { prisma } from '@/db';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, isComplete: boolean) {
  'use server';

  console.log(id, isComplete);
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <Header title="Todo App" />
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
