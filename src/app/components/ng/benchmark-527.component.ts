
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-527',
    template: `<div class="benchmark-component">
    <h3>Component 527</h3>
    <button type="button" (click)="increment527()">
      Count {{ count527() }}
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
  export class BenchmarkNg527 {
    count527 = signal(0);

    increment527() {
      this.count527.update((count) => count + 1);
    }
  }