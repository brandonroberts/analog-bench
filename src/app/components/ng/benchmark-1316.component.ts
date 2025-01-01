
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1316',
    template: `<div class="benchmark-component">
    <h3>Component 1316</h3>
    <button type="button" (click)="increment1316()">
      Count {{ count1316() }}
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
  export class BenchmarkNg1316 {
    count1316 = signal(0);

    increment1316() {
      this.count1316.update((count) => count + 1);
    }
  }