
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-569',
    template: `<div class="benchmark-component">
    <h3>Component 569</h3>
    <button type="button" (click)="increment569()">
      Count {{ count569() }}
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
  export class BenchmarkNg569 {
    count569 = signal(0);

    increment569() {
      this.count569.update((count) => count + 1);
    }
  }