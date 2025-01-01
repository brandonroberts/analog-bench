
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-372',
    template: `<div class="benchmark-component">
    <h3>Component 372</h3>
    <button type="button" (click)="increment372()">
      Count {{ count372() }}
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
  export class BenchmarkNg372 {
    count372 = signal(0);

    increment372() {
      this.count372.update((count) => count + 1);
    }
  }