
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1356',
    template: `<div class="benchmark-component">
    <h3>Component 1356</h3>
    <button type="button" (click)="increment1356()">
      Count {{ count1356() }}
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
  export class BenchmarkNg1356 {
    count1356 = signal(0);

    increment1356() {
      this.count1356.update((count) => count + 1);
    }
  }