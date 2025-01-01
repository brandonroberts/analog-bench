
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-332',
    template: `<div class="benchmark-component">
    <h3>Component 332</h3>
    <button type="button" (click)="increment332()">
      Count {{ count332() }}
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
  export class BenchmarkNg332 {
    count332 = signal(0);

    increment332() {
      this.count332.update((count) => count + 1);
    }
  }