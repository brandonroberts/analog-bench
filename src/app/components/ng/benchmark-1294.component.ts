
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1294',
    template: `<div class="benchmark-component">
    <h3>Component 1294</h3>
    <button type="button" (click)="increment1294()">
      Count {{ count1294() }}
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
  export class BenchmarkNg1294 {
    count1294 = signal(0);

    increment1294() {
      this.count1294.update((count) => count + 1);
    }
  }