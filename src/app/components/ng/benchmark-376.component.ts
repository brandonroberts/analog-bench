
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-376',
    template: `<div class="benchmark-component">
    <h3>Component 376</h3>
    <button type="button" (click)="increment376()">
      Count {{ count376() }}
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
  export class BenchmarkNg376 {
    count376 = signal(0);

    increment376() {
      this.count376.update((count) => count + 1);
    }
  }