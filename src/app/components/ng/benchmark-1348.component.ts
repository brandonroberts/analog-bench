
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1348',
    template: `<div class="benchmark-component">
    <h3>Component 1348</h3>
    <button type="button" (click)="increment1348()">
      Count {{ count1348() }}
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
  export class BenchmarkNg1348 {
    count1348 = signal(0);

    increment1348() {
      this.count1348.update((count) => count + 1);
    }
  }