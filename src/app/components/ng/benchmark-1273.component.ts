
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1273',
    template: `<div class="benchmark-component">
    <h3>Component 1273</h3>
    <button type="button" (click)="increment1273()">
      Count {{ count1273() }}
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
  export class BenchmarkNg1273 {
    count1273 = signal(0);

    increment1273() {
      this.count1273.update((count) => count + 1);
    }
  }