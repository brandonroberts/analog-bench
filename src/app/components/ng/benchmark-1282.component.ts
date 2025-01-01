
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1282',
    template: `<div class="benchmark-component">
    <h3>Component 1282</h3>
    <button type="button" (click)="increment1282()">
      Count {{ count1282() }}
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
  export class BenchmarkNg1282 {
    count1282 = signal(0);

    increment1282() {
      this.count1282.update((count) => count + 1);
    }
  }