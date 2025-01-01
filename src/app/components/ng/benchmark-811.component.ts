
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-811',
    template: `<div class="benchmark-component">
    <h3>Component 811</h3>
    <button type="button" (click)="increment811()">
      Count {{ count811() }}
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
  export class BenchmarkNg811 {
    count811 = signal(0);

    increment811() {
      this.count811.update((count) => count + 1);
    }
  }