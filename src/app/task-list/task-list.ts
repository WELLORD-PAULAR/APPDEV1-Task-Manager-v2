import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../taskservice/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  private taskService = inject(TaskService);
  tasks = computed(() => this.taskService.getTasks()());

  toggleCompleted(id: number) {
    this.taskService.toggleTaskCompleted(id);
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }
}
