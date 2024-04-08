"use client";

import React from "react";
import { addTodo } from "~/app/todos.actions";

export function AddTodo() {
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addTodo(formData);

        formRef.current?.reset();
      }}
    >
      <input type="text" name="text" />

      <button type="submit">Add</button>
    </form>
  );
}
