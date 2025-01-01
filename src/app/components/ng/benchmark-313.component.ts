
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-313',
    template: `<div class="benchmark-component">
    <h3>Component 313</h3>
    <button type="button" (click)="increment313()">
      Count {{ count313() }}
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
  export class BenchmarkNg313 {
    count313 = signal(0);

    increment313() {
      this.count313.update((count) => count + 1);
    }
  }