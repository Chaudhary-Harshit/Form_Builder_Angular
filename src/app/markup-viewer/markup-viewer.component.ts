import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-markup-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markup-viewer.component.html',
  styleUrls: ['./markup-viewer.component.css']
})
export class MarkupViewerComponent implements OnInit {
  htmlMarkup: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // Retrieve the HTML markup from the navigation state
    const rawMarkup = history.state.html;

    // Set the raw HTML markup to be displayed as text
    this.htmlMarkup = rawMarkup;
    console.log('Received HTML Markup:', this.htmlMarkup);
  }
}
