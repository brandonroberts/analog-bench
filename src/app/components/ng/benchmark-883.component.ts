
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-883',
    template: `<div class="benchmark-component">
    <h3>Component 883</h3>
    <button type="button" (click)="increment883()">
      Count {{ count883() }}
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
  export class BenchmarkNg883 {
    count883 = signal(0);

    increment883() {
      this.count883.update((count) => count + 1);
    }
  }