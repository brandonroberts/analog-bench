
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1037',
    template: `<div class="benchmark-component">
    <h3>Component 1037</h3>
    <button type="button" (click)="increment1037()">
      Count {{ count1037() }}
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
  export class BenchmarkNg1037 {
    count1037 = signal(0);

    increment1037() {
      this.count1037.update((count) => count + 1);
    }
  }