import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from './tokens/api-url.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com/todos'
    },
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com/todos'
    }
  ]
};
