
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1129',
    template: `<div class="benchmark-component">
    <h3>Component 1129</h3>
    <button type="button" (click)="increment1129()">
      Count {{ count1129() }}
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
  export class BenchmarkNg1129 {
    count1129 = signal(0);

    increment1129() {
      this.count1129.update((count) => count + 1);
    }
  }