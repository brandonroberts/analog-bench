
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-204',
    template: `<div class="benchmark-component">
    <h3>Component 204</h3>
    <button type="button" (click)="increment204()">
      Count {{ count204() }}
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
  export class BenchmarkNg204 {
    count204 = signal(0);

    increment204() {
      this.count204.update((count) => count + 1);
    }
  }