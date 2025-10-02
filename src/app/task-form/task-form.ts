import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../taskservice/task-service';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  private taskService = inject(TaskService);

  title = signal('');
  description = signal('');
  dueDate = signal('');

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.title()) return;
    this.taskService.addTask({
      title: this.title(),
      description: this.description(),
      dueDate: this.dueDate()
    });
    this.title.set('');
    this.description.set('');
    this.dueDate.set('');
  }
}
