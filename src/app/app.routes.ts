import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {
        path: 'local-storage-tasks',
        component: TasksComponent
    },
    {
        path: 'api-tasks',
        component: TasksComponent
    },
];
