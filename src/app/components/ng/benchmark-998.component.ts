
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-998',
    template: `<div class="benchmark-component">
    <h3>Component 998</h3>
    <button type="button" (click)="increment998()">
      Count {{ count998() }}
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
  export class BenchmarkNg998 {
    count998 = signal(0);

    increment998() {
      this.count998.update((count) => count + 1);
    }
  }