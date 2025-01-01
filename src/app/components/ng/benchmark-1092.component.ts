
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1092',
    template: `<div class="benchmark-component">
    <h3>Component 1092</h3>
    <button type="button" (click)="increment1092()">
      Count {{ count1092() }}
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
  export class BenchmarkNg1092 {
    count1092 = signal(0);

    increment1092() {
      this.count1092.update((count) => count + 1);
    }
  }