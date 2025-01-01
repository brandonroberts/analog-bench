
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-474',
    template: `<div class="benchmark-component">
    <h3>Component 474</h3>
    <button type="button" (click)="increment474()">
      Count {{ count474() }}
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
  export class BenchmarkNg474 {
    count474 = signal(0);

    increment474() {
      this.count474.update((count) => count + 1);
    }
  }