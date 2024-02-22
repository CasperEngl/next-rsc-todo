"use server";

import { eq, sql, count } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/drizzle";
import { todos } from "~/schema";

export async function addTodo(formData: FormData) {
  await db
    .insert(todos)
    .values({
      text: formData.get("text") as string,
      done: false,
    })
    .returning();

  revalidatePath("/");
}

export async function updateTodo(formData: FormData) {
   await db
     .update(todos)
     .set({
       text: formData.get("text") as string,
     })
     .where(eq(todos.id, Number(formData.get("id"))))
     .returning();

  revalidatePath("/");
}

export async function removeTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
}

export async function toggleTodo(id: number) {
   await db
     .update(todos)
     .set({
       done: sql`NOT ${todos.done}`,
     })
     .where(eq(todos.id, id))
     .returning();

  revalidatePath("/");
}

export async function getTodos() {
  const todos = db.query.todos.findMany();

  return todos;
}

export async function getTodo(formData: FormData) {
  const todo = db.query.todos.findFirst({
    where: eq(todos.id, Number(formData.get("id"))),
  });

  return todo;
}

export async function getTodoCount() {
  return await db
    .select({
      value: count(),
    })
    .from(todos)
    .then((result) => result[0].value);
}
