
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-856',
    template: `<div class="benchmark-component">
    <h3>Component 856</h3>
    <button type="button" (click)="increment856()">
      Count {{ count856() }}
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
  export class BenchmarkNg856 {
    count856 = signal(0);

    increment856() {
      this.count856.update((count) => count + 1);
    }
  }