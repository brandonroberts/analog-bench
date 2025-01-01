
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1315',
    template: `<div class="benchmark-component">
    <h3>Component 1315</h3>
    <button type="button" (click)="increment1315()">
      Count {{ count1315() }}
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
  export class BenchmarkNg1315 {
    count1315 = signal(0);

    increment1315() {
      this.count1315.update((count) => count + 1);
    }
  }