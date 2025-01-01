
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1286',
    template: `<div class="benchmark-component">
    <h3>Component 1286</h3>
    <button type="button" (click)="increment1286()">
      Count {{ count1286() }}
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
  export class BenchmarkNg1286 {
    count1286 = signal(0);

    increment1286() {
      this.count1286.update((count) => count + 1);
    }
  }