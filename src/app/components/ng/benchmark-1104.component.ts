
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1104',
    template: `<div class="benchmark-component">
    <h3>Component 1104</h3>
    <button type="button" (click)="increment1104()">
      Count {{ count1104() }}
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
  export class BenchmarkNg1104 {
    count1104 = signal(0);

    increment1104() {
      this.count1104.update((count) => count + 1);
    }
  }