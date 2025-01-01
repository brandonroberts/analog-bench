
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-741',
    template: `<div class="benchmark-component">
    <h3>Component 741</h3>
    <button type="button" (click)="increment741()">
      Count {{ count741() }}
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
  export class BenchmarkNg741 {
    count741 = signal(0);

    increment741() {
      this.count741.update((count) => count + 1);
    }
  }