
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-324',
    template: `<div class="benchmark-component">
    <h3>Component 324</h3>
    <button type="button" (click)="increment324()">
      Count {{ count324() }}
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
  export class BenchmarkNg324 {
    count324 = signal(0);

    increment324() {
      this.count324.update((count) => count + 1);
    }
  }