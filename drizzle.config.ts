import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: "./sqlite.db",
  },
});
