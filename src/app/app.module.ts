import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { MarkupViewerComponent } from './markup-viewer/markup-viewer.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    MarkupViewerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
