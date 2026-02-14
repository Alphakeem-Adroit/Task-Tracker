import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useMessageStore from './useMessageStore';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) => {
        set((state) => ({
          tasks: [...state.tasks, task],
        }));
      },

      removeTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      toggleTask: (id) =>
        set((state) => {
          const updatedTasks = state.tasks
            .map((task) =>
              task.id === id
                ? { ...task, completed: !task.completed }
                : task
            )
            // Sort: incomplete first, completed last
            .sort((a, b) => a.completed - b.completed);

          return { tasks: updatedTasks };
        }),

      fetchTasks: async () => {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
          );
          const data = await response.json();
          // Take first 5 tasks and sort them
          const initialTasks = data
            .slice(0, 5)
            .map((task) => ({
              id: task.id,
              title: task.title,
              completed: task.completed,
            }))
            .sort((a, b) => a.completed - b.completed);

          set({ tasks: initialTasks });

          useMessageStore
            .getState()
            .setMessage('Tasks fetched successfully', 'success');
        } catch (error) {
          console.error('Error fetching tasks:', error);
          useMessageStore.getState().setMessage('Error fetching tasks', 'error');
        }
      },
    }),
    {
      name: 'task-storage', // Key used in localStorage
      getStorage: () => localStorage, // optional, default is localStorage
    }
  )
);

export default useTaskStore;
