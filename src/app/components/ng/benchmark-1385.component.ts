
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1385',
    template: `<div class="benchmark-component">
    <h3>Component 1385</h3>
    <button type="button" (click)="increment1385()">
      Count {{ count1385() }}
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
  export class BenchmarkNg1385 {
    count1385 = signal(0);

    increment1385() {
      this.count1385.update((count) => count + 1);
    }
  }