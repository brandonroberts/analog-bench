
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-857',
    template: `<div class="benchmark-component">
    <h3>Component 857</h3>
    <button type="button" (click)="increment857()">
      Count {{ count857() }}
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
  export class BenchmarkNg857 {
    count857 = signal(0);

    increment857() {
      this.count857.update((count) => count + 1);
    }
  }