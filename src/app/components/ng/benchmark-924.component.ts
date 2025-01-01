
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-924',
    template: `<div class="benchmark-component">
    <h3>Component 924</h3>
    <button type="button" (click)="increment924()">
      Count {{ count924() }}
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
  export class BenchmarkNg924 {
    count924 = signal(0);

    increment924() {
      this.count924.update((count) => count + 1);
    }
  }