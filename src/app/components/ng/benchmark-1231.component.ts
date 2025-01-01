
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1231',
    template: `<div class="benchmark-component">
    <h3>Component 1231</h3>
    <button type="button" (click)="increment1231()">
      Count {{ count1231() }}
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
  export class BenchmarkNg1231 {
    count1231 = signal(0);

    increment1231() {
      this.count1231.update((count) => count + 1);
    }
  }