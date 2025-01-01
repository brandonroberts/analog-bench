
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-154',
    template: `<div class="benchmark-component">
    <h3>Component 154</h3>
    <button type="button" (click)="increment154()">
      Count {{ count154() }}
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
  export class BenchmarkNg154 {
    count154 = signal(0);

    increment154() {
      this.count154.update((count) => count + 1);
    }
  }