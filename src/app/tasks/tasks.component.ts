import { Component, Inject, inject, Optional, Self } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule} from 'primeng/table';
import { LocalStorageDataService } from '../services/local-storage-data.service';
import { DataService } from '../services/data.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ApiDataService } from '../services/api-data.service';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { API_URL } from '../tokens/api-url.token';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { dataServiceFactory } from '../factories/data-service-factory';
import { ActivatedRoute, Router } from '@angular/router';
import { DATA_TYPE } from '../tokens/data-type.toke';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    AsyncPipe,
    CommonModule,
    TabMenuModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  providers: [
    // {
    //   provide: DataService,
    //   useClass: ApiDataService
    // },
    {
      provide: DataService,
      useFactory: dataServiceFactory,
      deps: [Router]
    },

    // {
    //   provide: API_URL,
    //   useValue: 'some string'
    // }
  ]
})
export class TasksComponent {

  tabsItems: MenuItem[] = [
    {
      label: 'local-storage-tasks',
      routerLink: '../local-storage-tasks',
    },
    {
      label: 'api-tasks',
      routerLink: '../api-tasks',
    }
  ]
  tasks: Observable<Task[]> = inject(DataService).getData();
  newTaskName: string = '';

  private _taskService = inject(TaskService);

  constructor(
    @Inject(API_URL) @Optional() private _apiUrl: string,
    @Inject(DATA_TYPE) @Optional() private _dataType: string
  ) {
    console.log(this._dataType)
  }

  ngOnInit(){
    console.log(this._apiUrl)
  }

  // Метод для добавления задачи
  addTask() {
    if (this.newTaskName.trim()) {
      this._taskService.addTask(this.newTaskName.trim());
      this.newTaskName = ''; // Очищаем поле ввода
    }
  }

  // Метод для удаления задачи
  removeTask(taskId: number) {
    this._taskService.removeTask(taskId);
  }

  }
