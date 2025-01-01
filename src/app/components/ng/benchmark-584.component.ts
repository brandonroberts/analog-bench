
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-584',
    template: `<div class="benchmark-component">
    <h3>Component 584</h3>
    <button type="button" (click)="increment584()">
      Count {{ count584() }}
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
  export class BenchmarkNg584 {
    count584 = signal(0);

    increment584() {
      this.count584.update((count) => count + 1);
    }
  }