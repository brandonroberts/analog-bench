
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-37',
    template: `<div class="benchmark-component">
    <h3>Component 37</h3>
    <button type="button" (click)="increment37()">
      Count {{ count37() }}
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
  export class BenchmarkNg37 {
    count37 = signal(0);

    increment37() {
      this.count37.update((count) => count + 1);
    }
  }