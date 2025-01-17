import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-markup-viewer',
  standalone: true,
  templateUrl: './markup-viewer.component.html',
  styleUrls: ['./markup-viewer.component.css'],
})
export class MarkupViewerComponent {
  htmlMarkup: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.htmlMarkup = navigation?.extras.state?.['html'] || 'No HTML generated!';
  }
}
