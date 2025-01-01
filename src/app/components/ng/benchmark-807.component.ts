
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-807',
    template: `<div class="benchmark-component">
    <h3>Component 807</h3>
    <button type="button" (click)="increment807()">
      Count {{ count807() }}
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
  export class BenchmarkNg807 {
    count807 = signal(0);

    increment807() {
      this.count807.update((count) => count + 1);
    }
  }