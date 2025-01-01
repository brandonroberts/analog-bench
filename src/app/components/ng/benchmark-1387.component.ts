
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1387',
    template: `<div class="benchmark-component">
    <h3>Component 1387</h3>
    <button type="button" (click)="increment1387()">
      Count {{ count1387() }}
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
  export class BenchmarkNg1387 {
    count1387 = signal(0);

    increment1387() {
      this.count1387.update((count) => count + 1);
    }
  }