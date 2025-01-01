
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-579',
    template: `<div class="benchmark-component">
    <h3>Component 579</h3>
    <button type="button" (click)="increment579()">
      Count {{ count579() }}
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
  export class BenchmarkNg579 {
    count579 = signal(0);

    increment579() {
      this.count579.update((count) => count + 1);
    }
  }