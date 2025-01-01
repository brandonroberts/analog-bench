
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1262',
    template: `<div class="benchmark-component">
    <h3>Component 1262</h3>
    <button type="button" (click)="increment1262()">
      Count {{ count1262() }}
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
  export class BenchmarkNg1262 {
    count1262 = signal(0);

    increment1262() {
      this.count1262.update((count) => count + 1);
    }
  }