import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent {
  form: FormGroup;
  formElements: Array<{ name: string; type: string; required: boolean; label: string }> = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      inputName: ['', Validators.required],      
      inputType: ['text'],                       
      inputRequired: [false],                    
      inputLabel: ['', Validators.required],     
    });
  }

  addToTable(): void {
    if (this.form.invalid) {
      alert('Please fill in all fields!');
      return;
    }

    const formValue = this.form.value;

    this.formElements.push({
      name: formValue.inputName,
      type: formValue.inputType,
      required: formValue.inputRequired,
      label: formValue.inputLabel,
    });

   
    this.form.reset();
    this.form.controls['inputType'].setValue('text'); // Reset type to default
  }

  generateHTML(): string {
    let formHTML = '<form>\n';

    for (let element of this.formElements) {
      formHTML += `  <label for="${element.name}">${element.label}:</label>\n`;

      if (element.type === 'dropdown') {
        formHTML += `  <select id="${element.name}" name="${element.name}" ${
          element.required ? 'required' : ''
        }>\n    <!-- Options go here -->\n  </select>\n`;
      } else {
        formHTML += `  <input type="${element.type}" id="${element.name}" name="${
          element.name
        }" ${element.required ? 'required' : ''}>\n`;
      }

      formHTML += '  <br><br>\n';
    }

    formHTML += '</form>';
    return formHTML;
  }

  downloadHTML(): void {
    const formHTML = this.generateHTML();

    const blob = new Blob([formHTML], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  navigateToViewer(): void {
    const htmlMarkup = this.generateHTML();
    console.log('Generated HTML:', htmlMarkup);
    this.router.navigate(['/markup-viewer'], { state: { html: htmlMarkup } });
  }
}
