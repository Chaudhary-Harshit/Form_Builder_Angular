import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-form-builder',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule],   
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  
  form: FormGroup;
  formElements: Array<{ name: string, type: string, required: boolean, label: string }> = [];

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
    this.form.controls['inputType'].setValue('text'); // Reset to default value
  }

  
  generateHTML(): string {
    let generatedHTML = '<table>';
    generatedHTML += '<thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Label</th></tr></thead><tbody>';


    this.formElements.forEach(element => {
      generatedHTML += `<tr>
        <td>${element.name}</td>
        <td>${element.type}</td>
        <td>${element.required ? 'Yes' : 'No'}</td>
        <td>${element.label}</td>
      </tr>`;
    });

    generatedHTML += '</tbody></table>';
    return generatedHTML; 
  }
}
