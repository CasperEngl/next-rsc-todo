# Next-Todo Project

## Overview

Next-Todo is a modern, full-stack application for managing a personal to-do list. It leverages Next.js for the frontend and backend, uses Drizzle ORM with a SQLite database for data management, and incorporates Tailwind CSS for styling.

## Features

- **CRUD Operations**: Create, read, update, and delete to-dos.
- **Real-time UI Updates**: Utilizes React state and effects for immediate feedback.
- **Database Migrations**: Easy database schema evolution with Drizzle ORM migrations.
- **Styling**: Tailwind CSS for rapid UI development.

## Getting Started

1. **Install dependencies**

Navigate to the project directory and run:

```bash
bun install
```

2. **Run the development server**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production**

```bash
bun run build
bun run start
```

## Project Structure

- `src/`: Source files including Next.js pages, components, and the database schema.
- `drizzle/`: Contains database migration files.
- `public/`: Static files like images.
- `.eslintrc.json`, `tsconfig.json`, `tailwind.config.ts`: Configuration files for ESLint, TypeScript, and Tailwind CSS.

## Key Technologies

- **Next.js**: Framework for React-based web applications.
- **Drizzle ORM**: ORM for SQLite, simplifies database interactions.
- **SQLite**: Lightweight, disk-based database.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Adds static types to JavaScript for safer code.

## Contributing

Contributions are welcome! Please follow the existing coding style and submit a pull request.

## License

This project is open-source and available under the MIT License.
