
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1272',
    template: `<div class="benchmark-component">
    <h3>Component 1272</h3>
    <button type="button" (click)="increment1272()">
      Count {{ count1272() }}
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
  export class BenchmarkNg1272 {
    count1272 = signal(0);

    increment1272() {
      this.count1272.update((count) => count + 1);
    }
  }