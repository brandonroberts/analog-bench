
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-934',
    template: `<div class="benchmark-component">
    <h3>Component 934</h3>
    <button type="button" (click)="increment934()">
      Count {{ count934() }}
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
  export class BenchmarkNg934 {
    count934 = signal(0);

    increment934() {
      this.count934.update((count) => count + 1);
    }
  }