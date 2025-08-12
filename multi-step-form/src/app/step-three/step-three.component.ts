import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { JsonPipe } from '@angular/common'; // ✅ import JsonPipe

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [JsonPipe], // ✅ add it to imports
  template: `
    <h3>Review Your Data</h3>
    <pre>{{ data | json }}</pre>
  `
})
export class StepThreeComponent {
  data: any;
  constructor(private formData: FormDataService) {
    this.data = this.formData.getAllData();
  }
}
