
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-292',
    template: `<div class="benchmark-component">
    <h3>Component 292</h3>
    <button type="button" (click)="increment292()">
      Count {{ count292() }}
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
  export class BenchmarkNg292 {
    count292 = signal(0);

    increment292() {
      this.count292.update((count) => count + 1);
    }
  }