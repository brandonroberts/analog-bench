
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-370',
    template: `<div class="benchmark-component">
    <h3>Component 370</h3>
    <button type="button" (click)="increment370()">
      Count {{ count370() }}
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
  export class BenchmarkNg370 {
    count370 = signal(0);

    increment370() {
      this.count370.update((count) => count + 1);
    }
  }