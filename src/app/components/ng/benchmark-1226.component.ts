
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1226',
    template: `<div class="benchmark-component">
    <h3>Component 1226</h3>
    <button type="button" (click)="increment1226()">
      Count {{ count1226() }}
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
  export class BenchmarkNg1226 {
    count1226 = signal(0);

    increment1226() {
      this.count1226.update((count) => count + 1);
    }
  }