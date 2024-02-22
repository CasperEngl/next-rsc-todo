import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, sqlite } from "~/drizzle";
import { todos } from "~/schema";

migrate(db, { migrationsFolder: "drizzle" });

await db
  .insert(todos)
  .values([
    { text: "Buy groceries", done: false },
    { text: "Read a book", done: false },
    { text: "Complete project", done: true },
  ])
  .returning();

sqlite.close();
