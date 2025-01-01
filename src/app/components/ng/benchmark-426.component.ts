
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-426',
    template: `<div class="benchmark-component">
    <h3>Component 426</h3>
    <button type="button" (click)="increment426()">
      Count {{ count426() }}
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
  export class BenchmarkNg426 {
    count426 = signal(0);

    increment426() {
      this.count426.update((count) => count + 1);
    }
  }