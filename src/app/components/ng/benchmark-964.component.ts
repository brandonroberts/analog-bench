
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-964',
    template: `<div class="benchmark-component">
    <h3>Component 964</h3>
    <button type="button" (click)="increment964()">
      Count {{ count964() }}
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
  export class BenchmarkNg964 {
    count964 = signal(0);

    increment964() {
      this.count964.update((count) => count + 1);
    }
  }