
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1283',
    template: `<div class="benchmark-component">
    <h3>Component 1283</h3>
    <button type="button" (click)="increment1283()">
      Count {{ count1283() }}
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
  export class BenchmarkNg1283 {
    count1283 = signal(0);

    increment1283() {
      this.count1283.update((count) => count + 1);
    }
  }