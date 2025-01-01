
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1253',
    template: `<div class="benchmark-component">
    <h3>Component 1253</h3>
    <button type="button" (click)="increment1253()">
      Count {{ count1253() }}
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
  export class BenchmarkNg1253 {
    count1253 = signal(0);

    increment1253() {
      this.count1253.update((count) => count + 1);
    }
  }