
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1382',
    template: `<div class="benchmark-component">
    <h3>Component 1382</h3>
    <button type="button" (click)="increment1382()">
      Count {{ count1382() }}
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
  export class BenchmarkNg1382 {
    count1382 = signal(0);

    increment1382() {
      this.count1382.update((count) => count + 1);
    }
  }