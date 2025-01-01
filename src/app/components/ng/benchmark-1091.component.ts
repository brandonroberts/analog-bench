
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1091',
    template: `<div class="benchmark-component">
    <h3>Component 1091</h3>
    <button type="button" (click)="increment1091()">
      Count {{ count1091() }}
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
  export class BenchmarkNg1091 {
    count1091 = signal(0);

    increment1091() {
      this.count1091.update((count) => count + 1);
    }
  }