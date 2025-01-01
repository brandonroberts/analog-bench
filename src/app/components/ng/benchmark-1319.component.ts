
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1319',
    template: `<div class="benchmark-component">
    <h3>Component 1319</h3>
    <button type="button" (click)="increment1319()">
      Count {{ count1319() }}
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
  export class BenchmarkNg1319 {
    count1319 = signal(0);

    increment1319() {
      this.count1319.update((count) => count + 1);
    }
  }