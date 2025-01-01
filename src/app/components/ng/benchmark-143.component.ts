
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-143',
    template: `<div class="benchmark-component">
    <h3>Component 143</h3>
    <button type="button" (click)="increment143()">
      Count {{ count143() }}
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
  export class BenchmarkNg143 {
    count143 = signal(0);

    increment143() {
      this.count143.update((count) => count + 1);
    }
  }