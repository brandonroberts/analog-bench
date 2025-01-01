
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1297',
    template: `<div class="benchmark-component">
    <h3>Component 1297</h3>
    <button type="button" (click)="increment1297()">
      Count {{ count1297() }}
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
  export class BenchmarkNg1297 {
    count1297 = signal(0);

    increment1297() {
      this.count1297.update((count) => count + 1);
    }
  }