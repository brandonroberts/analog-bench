
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1102',
    template: `<div class="benchmark-component">
    <h3>Component 1102</h3>
    <button type="button" (click)="increment1102()">
      Count {{ count1102() }}
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
  export class BenchmarkNg1102 {
    count1102 = signal(0);

    increment1102() {
      this.count1102.update((count) => count + 1);
    }
  }