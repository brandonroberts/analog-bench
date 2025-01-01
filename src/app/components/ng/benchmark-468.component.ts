
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-468',
    template: `<div class="benchmark-component">
    <h3>Component 468</h3>
    <button type="button" (click)="increment468()">
      Count {{ count468() }}
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
  export class BenchmarkNg468 {
    count468 = signal(0);

    increment468() {
      this.count468.update((count) => count + 1);
    }
  }