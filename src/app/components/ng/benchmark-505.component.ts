
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-505',
    template: `<div class="benchmark-component">
    <h3>Component 505</h3>
    <button type="button" (click)="increment505()">
      Count {{ count505() }}
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
  export class BenchmarkNg505 {
    count505 = signal(0);

    increment505() {
      this.count505.update((count) => count + 1);
    }
  }