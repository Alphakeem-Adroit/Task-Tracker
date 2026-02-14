# Task Tracker

A simple and interactive **Todo List application** built with **React** and **Zustand**. This project allows users to add, toggle, remove, and fetch tasks, with persistent storage and validation to enhance user experience.

---

## Features

- Add new tasks with validation to prevent empty titles.
- Toggle task completion status; incomplete tasks appear at the top, completed tasks at the bottom.
- Remove tasks easily.
- Fetch initial tasks from a public API (`jsonplaceholder.typicode.com`).
- Task persistence using **localStorage** via Zustand’s `persist` middleware.
- User-friendly messages for success and error feedback.
- Fully styled with **Tailwind CSS**.

---

## Technologies Used

- **React** – Frontend framework for building the UI.  
- **Zustand** – Lightweight state management with persistence.  
- **Tailwind CSS** – Utility-first CSS framework for styling.  
- **Vite** – Fast development server and build tool.  
- **LocalStorage** – For storing tasks persistently across page reloads.  

---

## Getting Started

### Prerequisites

- Node.js >= 18.x  
- npm >= 9.x  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Alphakeem-Adroit/Task-Tracker.git
cd Task-Tracker
cd task-tracker
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

---

## Usage

* **Add Task:** Enter a task title in the input and click "Add".
* **Toggle Completion:** Check/uncheck the box to mark a task as completed or incomplete.
* **Remove Task:** Click the "Remove" button next to a task.
* **Persistence:** Tasks are saved to `localStorage` and remain after refreshing the page.

---

## Project Structure

```
src/
├─ components/       # React components (TaskList, TaskForm, etc.)
├─ store/            # Zustand stores (useTaskStore, useMessageStore)
├─ App.jsx           # Main app component
├─ main.jsx          # Entry point, imports global styles
├─ index.css         # Tailwind CSS setup
```

---

## Contributing

Contributions are welcome! You can:

* Improve styling or UX
* Add more features (e.g., task priorities, categories)
* Optimize performance or state management

Please fork the repo and create a pull request.

---

## License

This project is **open source**. Feel free to use it for learning or personal projects.

---

## Acknowledgements

* [Zustand](https://github.com/pmndrs/zustand) for simple state management
* [Tailwind CSS](https://tailwindcss.com/) for rapid UI styling
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for dummy API data

