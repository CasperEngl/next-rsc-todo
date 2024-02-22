import { AddTodo } from "~/app/add-todo";
import { Todo } from "~/app/todo.tsx";
import { getTodos } from "~/app/todos.actions";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <AddTodo />
    </div>
  );
}
