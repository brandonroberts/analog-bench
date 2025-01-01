
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1073',
    template: `<div class="benchmark-component">
    <h3>Component 1073</h3>
    <button type="button" (click)="increment1073()">
      Count {{ count1073() }}
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
  export class BenchmarkNg1073 {
    count1073 = signal(0);

    increment1073() {
      this.count1073.update((count) => count + 1);
    }
  }