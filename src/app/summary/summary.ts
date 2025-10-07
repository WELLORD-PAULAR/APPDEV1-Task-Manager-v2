import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../taskservice/task-service';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.css'
})
export class Summary {
  private taskService = inject(TaskService);
  totalTasks = computed(() => this.taskService.getTasks()().length);
  completedTasks = computed(() => this.taskService.getTasks()().filter((t: { completed: boolean }) => t.completed).length);
  pendingTasks = computed(() => this.totalTasks() - this.completedTasks());
}
