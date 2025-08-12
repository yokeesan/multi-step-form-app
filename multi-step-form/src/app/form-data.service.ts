import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormDataService {
  private formData: any = {};

  setStepData(stepName: string, data: any) {
    this.formData[stepName] = data;
  }

  getStepData(stepName: string) {
    return this.formData[stepName] || {};
  }

  getAllData() {
    return this.formData;
  }
}
