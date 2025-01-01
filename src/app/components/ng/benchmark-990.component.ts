
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-990',
    template: `<div class="benchmark-component">
    <h3>Component 990</h3>
    <button type="button" (click)="increment990()">
      Count {{ count990() }}
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
  export class BenchmarkNg990 {
    count990 = signal(0);

    increment990() {
      this.count990.update((count) => count + 1);
    }
  }