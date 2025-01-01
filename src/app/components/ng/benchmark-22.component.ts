
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-22',
    template: `<div class="benchmark-component">
    <h3>Component 22</h3>
    <button type="button" (click)="increment22()">
      Count {{ count22() }}
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
  export class BenchmarkNg22 {
    count22 = signal(0);

    increment22() {
      this.count22.update((count) => count + 1);
    }
  }