
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-230',
    template: `<div class="benchmark-component">
    <h3>Component 230</h3>
    <button type="button" (click)="increment230()">
      Count {{ count230() }}
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
  export class BenchmarkNg230 {
    count230 = signal(0);

    increment230() {
      this.count230.update((count) => count + 1);
    }
  }