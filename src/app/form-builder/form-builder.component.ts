import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import required modules
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  form: FormGroup;
  formElements: Array<{ name: string, type: string, required: boolean, label: string }> = [];
  generatedHTML: string = '';

  constructor(private fb: FormBuilder) {
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
      label: formValue.inputLabel
    });

    this.form.reset();
    this.form.controls['inputType'].setValue('text'); 
  }

  generateHTML(): void {
    let formHTML = '<form>\n';

    this.formElements.forEach(element => {
      formHTML += `  <label for="${element.name}">${element.label}</label>\n`;

      if (element.type === 'dropdown') {
        formHTML += `  <select id="${element.name}" name="${element.name}" ${element.required ? 'required' : ''}>\n`;
        formHTML += `  </select>\n`;
      } else {
        formHTML += `  <input type="${element.type}" id="${element.name}" name="${element.name}" ${element.required ? 'required' : ''}>\n`;
      }

      formHTML += '  <br><br>\n';
    });

    formHTML += '</form>';
    this.generatedHTML = formHTML;
  }

  downloadHTML(): void {
    const blob = new Blob([this.generatedHTML], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generatedForm.txt';
    link.click();
  }
}
