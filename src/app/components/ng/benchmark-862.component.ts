
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-862',
    template: `<div class="benchmark-component">
    <h3>Component 862</h3>
    <button type="button" (click)="increment862()">
      Count {{ count862() }}
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
  export class BenchmarkNg862 {
    count862 = signal(0);

    increment862() {
      this.count862.update((count) => count + 1);
    }
  }