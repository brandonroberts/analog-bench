
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-377',
    template: `<div class="benchmark-component">
    <h3>Component 377</h3>
    <button type="button" (click)="increment377()">
      Count {{ count377() }}
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
  export class BenchmarkNg377 {
    count377 = signal(0);

    increment377() {
      this.count377.update((count) => count + 1);
    }
  }