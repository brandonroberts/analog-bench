
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-723',
    template: `<div class="benchmark-component">
    <h3>Component 723</h3>
    <button type="button" (click)="increment723()">
      Count {{ count723() }}
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
  export class BenchmarkNg723 {
    count723 = signal(0);

    increment723() {
      this.count723.update((count) => count + 1);
    }
  }