
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1025',
    template: `<div class="benchmark-component">
    <h3>Component 1025</h3>
    <button type="button" (click)="increment1025()">
      Count {{ count1025() }}
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
  export class BenchmarkNg1025 {
    count1025 = signal(0);

    increment1025() {
      this.count1025.update((count) => count + 1);
    }
  }