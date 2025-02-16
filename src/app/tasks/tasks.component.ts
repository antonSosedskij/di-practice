import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule} from 'primeng/table';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  private _taskService = inject(TaskService);

  newTaskName: string = ''; // Новое название задачи

  constructor(private taskService: TaskService) {}

  // Метод для добавления задачи
  addTask() {
    if (this.newTaskName.trim()) {
      this.taskService.addTask(this.newTaskName.trim());
      this.newTaskName = ''; // Очищаем поле ввода
    }
  }

  // Метод для удаления задачи
  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }

  // Получаем список задач из сервиса
  get tasks() {
    return this._taskService.getTasks();
  }
  }
