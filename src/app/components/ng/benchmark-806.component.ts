
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-806',
    template: `<div class="benchmark-component">
    <h3>Component 806</h3>
    <button type="button" (click)="increment806()">
      Count {{ count806() }}
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
  export class BenchmarkNg806 {
    count806 = signal(0);

    increment806() {
      this.count806.update((count) => count + 1);
    }
  }