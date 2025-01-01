
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-594',
    template: `<div class="benchmark-component">
    <h3>Component 594</h3>
    <button type="button" (click)="increment594()">
      Count {{ count594() }}
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
  export class BenchmarkNg594 {
    count594 = signal(0);

    increment594() {
      this.count594.update((count) => count + 1);
    }
  }