
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1335',
    template: `<div class="benchmark-component">
    <h3>Component 1335</h3>
    <button type="button" (click)="increment1335()">
      Count {{ count1335() }}
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
  export class BenchmarkNg1335 {
    count1335 = signal(0);

    increment1335() {
      this.count1335.update((count) => count + 1);
    }
  }