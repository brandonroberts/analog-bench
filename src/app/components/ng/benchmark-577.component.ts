
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-577',
    template: `<div class="benchmark-component">
    <h3>Component 577</h3>
    <button type="button" (click)="increment577()">
      Count {{ count577() }}
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
  export class BenchmarkNg577 {
    count577 = signal(0);

    increment577() {
      this.count577.update((count) => count + 1);
    }
  }