
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-211',
    template: `<div class="benchmark-component">
    <h3>Component 211</h3>
    <button type="button" (click)="increment211()">
      Count {{ count211() }}
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
  export class BenchmarkNg211 {
    count211 = signal(0);

    increment211() {
      this.count211.update((count) => count + 1);
    }
  }