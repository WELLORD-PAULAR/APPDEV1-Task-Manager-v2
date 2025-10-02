import { Routes } from '@angular/router';
import { Summary } from './summary/summary';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'summary', component: Summary},
  {path: 'task-form', component: TaskForm},
  {path: 'task-list', component: TaskList}
];
