
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-295',
    template: `<div class="benchmark-component">
    <h3>Component 295</h3>
    <button type="button" (click)="increment295()">
      Count {{ count295() }}
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
  export class BenchmarkNg295 {
    count295 = signal(0);

    increment295() {
      this.count295.update((count) => count + 1);
    }
  }