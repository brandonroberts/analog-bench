
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1239',
    template: `<div class="benchmark-component">
    <h3>Component 1239</h3>
    <button type="button" (click)="increment1239()">
      Count {{ count1239() }}
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
  export class BenchmarkNg1239 {
    count1239 = signal(0);

    increment1239() {
      this.count1239.update((count) => count + 1);
    }
  }