
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Correct path to app.component.ts
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Correct path to app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
