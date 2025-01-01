
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1237',
    template: `<div class="benchmark-component">
    <h3>Component 1237</h3>
    <button type="button" (click)="increment1237()">
      Count {{ count1237() }}
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
  export class BenchmarkNg1237 {
    count1237 = signal(0);

    increment1237() {
      this.count1237.update((count) => count + 1);
    }
  }