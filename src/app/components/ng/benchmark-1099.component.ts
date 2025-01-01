
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1099',
    template: `<div class="benchmark-component">
    <h3>Component 1099</h3>
    <button type="button" (click)="increment1099()">
      Count {{ count1099() }}
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
  export class BenchmarkNg1099 {
    count1099 = signal(0);

    increment1099() {
      this.count1099.update((count) => count + 1);
    }
  }