
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-438',
    template: `<div class="benchmark-component">
    <h3>Component 438</h3>
    <button type="button" (click)="increment438()">
      Count {{ count438() }}
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
  export class BenchmarkNg438 {
    count438 = signal(0);

    increment438() {
      this.count438.update((count) => count + 1);
    }
  }