
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1367',
    template: `<div class="benchmark-component">
    <h3>Component 1367</h3>
    <button type="button" (click)="increment1367()">
      Count {{ count1367() }}
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
  export class BenchmarkNg1367 {
    count1367 = signal(0);

    increment1367() {
      this.count1367.update((count) => count + 1);
    }
  }