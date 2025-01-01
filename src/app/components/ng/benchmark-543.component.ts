
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-543',
    template: `<div class="benchmark-component">
    <h3>Component 543</h3>
    <button type="button" (click)="increment543()">
      Count {{ count543() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg543 {
    count543 = signal(0);

    increment543() {
      this.count543.update((count) => count + 1);
    }
  }