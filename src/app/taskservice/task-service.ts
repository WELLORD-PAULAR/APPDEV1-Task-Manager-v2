
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Array<{ id: number; title: string; description?: string; dueDate?: string; completed: boolean }>>([]);

  getTasks() {
    return this.tasks;
  }

  addTask(task: { title: string; description?: string; dueDate?: string }) {
    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      completed: false
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  removeTask(id: number) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
  }

  toggleTaskCompleted(id: number) {
    this.tasks.update(tasks => tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }
}
