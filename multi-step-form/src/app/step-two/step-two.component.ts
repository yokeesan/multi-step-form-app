import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="next()">
      <label>Email:</label>
      <input formControlName="email">
      <button type="submit">Next</button>
    </form>
  `
})
export class StepTwoComponent {
  @Output() completed = new EventEmitter<void>();
  form = this.fb.group({ email: '' });

  constructor(private fb: FormBuilder, private formData: FormDataService) {}

  next() {
    this.formData.setStepData('stepTwo', this.form.value);
    this.completed.emit();
  }
}
