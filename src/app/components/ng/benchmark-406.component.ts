
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-406',
    template: `<div class="benchmark-component">
    <h3>Component 406</h3>
    <button type="button" (click)="increment406()">
      Count {{ count406() }}
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
  export class BenchmarkNg406 {
    count406 = signal(0);

    increment406() {
      this.count406.update((count) => count + 1);
    }
  }