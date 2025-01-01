
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-547',
    template: `<div class="benchmark-component">
    <h3>Component 547</h3>
    <button type="button" (click)="increment547()">
      Count {{ count547() }}
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
  export class BenchmarkNg547 {
    count547 = signal(0);

    increment547() {
      this.count547.update((count) => count + 1);
    }
  }