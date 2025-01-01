
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1268',
    template: `<div class="benchmark-component">
    <h3>Component 1268</h3>
    <button type="button" (click)="increment1268()">
      Count {{ count1268() }}
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
  export class BenchmarkNg1268 {
    count1268 = signal(0);

    increment1268() {
      this.count1268.update((count) => count + 1);
    }
  }