// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Welcome to Form Builder</h1>
    <router-outlet></router-outlet>  <!-- Router Outlet -->
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],  
})
export class AppComponent {
}
