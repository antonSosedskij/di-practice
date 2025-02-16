import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() {}

  addTask(name: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: name,
    };
    this.tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
