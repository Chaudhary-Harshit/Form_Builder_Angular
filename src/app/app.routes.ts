import { Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { MarkupViewerComponent } from './markup-viewer/markup-viewer.component';

export const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent, // Default route
  },
  {
    path: 'markup-viewer',
    component: MarkupViewerComponent, // Route for Markup Viewer
  },
];
