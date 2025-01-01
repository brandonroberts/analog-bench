
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1384',
    template: `<div class="benchmark-component">
    <h3>Component 1384</h3>
    <button type="button" (click)="increment1384()">
      Count {{ count1384() }}
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
  export class BenchmarkNg1384 {
    count1384 = signal(0);

    increment1384() {
      this.count1384.update((count) => count + 1);
    }
  }