
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-404',
    template: `<div class="benchmark-component">
    <h3>Component 404</h3>
    <button type="button" (click)="increment404()">
      Count {{ count404() }}
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
  export class BenchmarkNg404 {
    count404 = signal(0);

    increment404() {
      this.count404.update((count) => count + 1);
    }
  }