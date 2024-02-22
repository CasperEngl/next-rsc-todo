"use client";

import { InferSelectModel } from "drizzle-orm";
import React from "react";
import { flushSync } from "react-dom";
import { toggleTodo, updateTodo, removeTodo } from "~/app/todos.actions";
import { todos } from "~/schema";

export function Todo(props: { todo: InferSelectModel<typeof todos> }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [editing, setEditing] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={!!props.todo.done}
        onChange={async () => {
          await toggleTodo(props.todo.id);
        }}
      />

      <button
        type="button"
        onDoubleClick={async () => {
          await removeTodo(props.todo.id);
        }}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            await removeTodo(props.todo.id);
          }
        }}
      >
        x
      </button>

      {editing ? (
        <form
          action={async (formData) => {
            await updateTodo(formData);

            setEditing(false);
          }}
          className="inline-flex gap-2"
        >
          <input type="hidden" name="id" value={props.todo.id} />

          <input
            type="text"
            name="text"
            defaultValue={props.todo.text}
            ref={inputRef}
            className="border"
          />

          <div className="inline-flex gap-1">
            <button className="border" type="submit">
              Save
            </button>

            <button
              className="border"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <span
          onDoubleClick={() => {
            flushSync(() => {
              setEditing(true);
            });

            inputRef.current?.focus();
          }}
        >
          {props.todo.text}
        </span>
      )}
    </div>
  );
}
