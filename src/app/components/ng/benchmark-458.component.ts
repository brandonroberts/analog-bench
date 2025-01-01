
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-458',
    template: `<div class="benchmark-component">
    <h3>Component 458</h3>
    <button type="button" (click)="increment458()">
      Count {{ count458() }}
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
  export class BenchmarkNg458 {
    count458 = signal(0);

    increment458() {
      this.count458.update((count) => count + 1);
    }
  }