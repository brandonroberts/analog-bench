
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-846',
    template: `<div class="benchmark-component">
    <h3>Component 846</h3>
    <button type="button" (click)="increment846()">
      Count {{ count846() }}
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
  export class BenchmarkNg846 {
    count846 = signal(0);

    increment846() {
      this.count846.update((count) => count + 1);
    }
  }