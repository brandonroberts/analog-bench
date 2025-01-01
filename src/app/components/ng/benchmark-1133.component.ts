
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1133',
    template: `<div class="benchmark-component">
    <h3>Component 1133</h3>
    <button type="button" (click)="increment1133()">
      Count {{ count1133() }}
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
  export class BenchmarkNg1133 {
    count1133 = signal(0);

    increment1133() {
      this.count1133.update((count) => count + 1);
    }
  }