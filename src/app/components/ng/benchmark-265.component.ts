
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-265',
    template: `<div class="benchmark-component">
    <h3>Component 265</h3>
    <button type="button" (click)="increment265()">
      Count {{ count265() }}
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
  export class BenchmarkNg265 {
    count265 = signal(0);

    increment265() {
      this.count265.update((count) => count + 1);
    }
  }