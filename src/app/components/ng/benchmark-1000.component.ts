
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1000',
    template: `<div class="benchmark-component">
    <h3>Component 1000</h3>
    <button type="button" (click)="increment1000()">
      Count {{ count1000() }}
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
  export class BenchmarkNg1000 {
    count1000 = signal(0);

    increment1000() {
      this.count1000.update((count) => count + 1);
    }
  }