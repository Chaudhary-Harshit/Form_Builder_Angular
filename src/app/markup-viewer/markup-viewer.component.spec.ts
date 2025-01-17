import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupViewerComponent } from './markup-viewer.component';

describe('MarkupViewerComponent', () => {
  let component: MarkupViewerComponent;
  let fixture: ComponentFixture<MarkupViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkupViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkupViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
