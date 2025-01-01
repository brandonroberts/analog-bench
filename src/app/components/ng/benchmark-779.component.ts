
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-779',
    template: `<div class="benchmark-component">
    <h3>Component 779</h3>
    <button type="button" (click)="increment779()">
      Count {{ count779() }}
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
  export class BenchmarkNg779 {
    count779 = signal(0);

    increment779() {
      this.count779.update((count) => count + 1);
    }
  }