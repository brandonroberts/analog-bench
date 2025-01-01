
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1328',
    template: `<div class="benchmark-component">
    <h3>Component 1328</h3>
    <button type="button" (click)="increment1328()">
      Count {{ count1328() }}
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
  export class BenchmarkNg1328 {
    count1328 = signal(0);

    increment1328() {
      this.count1328.update((count) => count + 1);
    }
  }