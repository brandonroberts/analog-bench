
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-621',
    template: `<div class="benchmark-component">
    <h3>Component 621</h3>
    <button type="button" (click)="increment621()">
      Count {{ count621() }}
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
  export class BenchmarkNg621 {
    count621 = signal(0);

    increment621() {
      this.count621.update((count) => count + 1);
    }
  }