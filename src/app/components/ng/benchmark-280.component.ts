
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-280',
    template: `<div class="benchmark-component">
    <h3>Component 280</h3>
    <button type="button" (click)="increment280()">
      Count {{ count280() }}
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
  export class BenchmarkNg280 {
    count280 = signal(0);

    increment280() {
      this.count280.update((count) => count + 1);
    }
  }