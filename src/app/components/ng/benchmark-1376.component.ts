
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1376',
    template: `<div class="benchmark-component">
    <h3>Component 1376</h3>
    <button type="button" (click)="increment1376()">
      Count {{ count1376() }}
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
  export class BenchmarkNg1376 {
    count1376 = signal(0);

    increment1376() {
      this.count1376.update((count) => count + 1);
    }
  }