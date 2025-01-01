
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-80',
    template: `<div class="benchmark-component">
    <h3>Component 80</h3>
    <button type="button" (click)="increment80()">
      Count {{ count80() }}
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
  export class BenchmarkNg80 {
    count80 = signal(0);

    increment80() {
      this.count80.update((count) => count + 1);
    }
  }