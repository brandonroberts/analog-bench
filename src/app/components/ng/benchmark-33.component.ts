
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-33',
    template: `<div class="benchmark-component">
    <h3>Component 33</h3>
    <button type="button" (click)="increment33()">
      Count {{ count33() }}
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
  export class BenchmarkNg33 {
    count33 = signal(0);

    increment33() {
      this.count33.update((count) => count + 1);
    }
  }