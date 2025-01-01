
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-476',
    template: `<div class="benchmark-component">
    <h3>Component 476</h3>
    <button type="button" (click)="increment476()">
      Count {{ count476() }}
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
  export class BenchmarkNg476 {
    count476 = signal(0);

    increment476() {
      this.count476.update((count) => count + 1);
    }
  }