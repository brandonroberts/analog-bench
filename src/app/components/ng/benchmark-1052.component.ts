
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1052',
    template: `<div class="benchmark-component">
    <h3>Component 1052</h3>
    <button type="button" (click)="increment1052()">
      Count {{ count1052() }}
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
  export class BenchmarkNg1052 {
    count1052 = signal(0);

    increment1052() {
      this.count1052.update((count) => count + 1);
    }
  }