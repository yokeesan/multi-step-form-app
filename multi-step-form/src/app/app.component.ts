import { Component, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Multi-step Form</h1>
    <ng-container #stepHost></ng-container>
  `
})
export class AppComponent {
  @ViewChild('stepHost', { read: ViewContainerRef }) stepHost!: ViewContainerRef;

  // ✅ Force all steps into a single generic type
  private steps: Type<any>[] = [StepOneComponent, StepTwoComponent, StepThreeComponent];
  private currentStepIndex = 0;

  ngAfterViewInit() {
    this.loadStep();
  }

  loadStep() {
    this.stepHost.clear();
    const stepToLoad = this.steps[this.currentStepIndex] as Type<any>; // ✅ cast to Type<any>
    const componentRef = this.stepHost.createComponent(stepToLoad);

    if (this.currentStepIndex < this.steps.length - 1) {
      (componentRef.instance as any).completed?.subscribe(() => {
        this.currentStepIndex++;
        this.loadStep();
      });
    }
  }
}
