
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1309',
    template: `<div class="benchmark-component">
    <h3>Component 1309</h3>
    <button type="button" (click)="increment1309()">
      Count {{ count1309() }}
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
  export class BenchmarkNg1309 {
    count1309 = signal(0);

    increment1309() {
      this.count1309.update((count) => count + 1);
    }
  }