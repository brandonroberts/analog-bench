
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1295',
    template: `<div class="benchmark-component">
    <h3>Component 1295</h3>
    <button type="button" (click)="increment1295()">
      Count {{ count1295() }}
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
  export class BenchmarkNg1295 {
    count1295 = signal(0);

    increment1295() {
      this.count1295.update((count) => count + 1);
    }
  }