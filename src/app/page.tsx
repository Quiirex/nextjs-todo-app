import Header from '@/components/Header';
import { TodoItem } from '@/components/TodoItem';
import { prisma } from '@/db';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, isComplete: boolean) {
  'use server';

  await prisma.todo.update({
    where: { id },
    data: { isComplete },
  });
}

async function removeTodo(id: string) {
  'use server';

  await prisma.todo.delete({
    where: { id },
  });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <div className="container mx-auto p-4 max-w-2xl">
        <Header title="Todo App" />
        <ul className="flex flex-col gap-1">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
