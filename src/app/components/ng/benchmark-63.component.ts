
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-63',
    template: `<div class="benchmark-component">
    <h3>Component 63</h3>
    <button type="button" (click)="increment63()">
      Count {{ count63() }}
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
  export class BenchmarkNg63 {
    count63 = signal(0);

    increment63() {
      this.count63.update((count) => count + 1);
    }
  }