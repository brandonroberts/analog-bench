
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-286',
    template: `<div class="benchmark-component">
    <h3>Component 286</h3>
    <button type="button" (click)="increment286()">
      Count {{ count286() }}
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
  export class BenchmarkNg286 {
    count286 = signal(0);

    increment286() {
      this.count286.update((count) => count + 1);
    }
  }