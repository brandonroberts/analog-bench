
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1039',
    template: `<div class="benchmark-component">
    <h3>Component 1039</h3>
    <button type="button" (click)="increment1039()">
      Count {{ count1039() }}
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
  export class BenchmarkNg1039 {
    count1039 = signal(0);

    increment1039() {
      this.count1039.update((count) => count + 1);
    }
  }