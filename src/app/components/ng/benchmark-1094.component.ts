
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1094',
    template: `<div class="benchmark-component">
    <h3>Component 1094</h3>
    <button type="button" (click)="increment1094()">
      Count {{ count1094() }}
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
  export class BenchmarkNg1094 {
    count1094 = signal(0);

    increment1094() {
      this.count1094.update((count) => count + 1);
    }
  }