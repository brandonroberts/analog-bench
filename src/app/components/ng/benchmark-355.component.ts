
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-355',
    template: `<div class="benchmark-component">
    <h3>Component 355</h3>
    <button type="button" (click)="increment355()">
      Count {{ count355() }}
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
  export class BenchmarkNg355 {
    count355 = signal(0);

    increment355() {
      this.count355.update((count) => count + 1);
    }
  }