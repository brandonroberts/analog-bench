
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-695',
    template: `<div class="benchmark-component">
    <h3>Component 695</h3>
    <button type="button" (click)="increment695()">
      Count {{ count695() }}
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
  export class BenchmarkNg695 {
    count695 = signal(0);

    increment695() {
      this.count695.update((count) => count + 1);
    }
  }