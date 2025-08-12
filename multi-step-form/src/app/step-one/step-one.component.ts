import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="next()">
      <label>Name:</label>
      <input formControlName="name">
      <button type="submit">Next</button>
    </form>
  `
})
export class StepOneComponent {
  @Output() completed = new EventEmitter<void>();
  form = this.fb.group({ name: '' });

  constructor(private fb: FormBuilder, private formData: FormDataService) {}

  next() {
    this.formData.setStepData('stepOne', this.form.value);
    this.completed.emit();
  }
}
