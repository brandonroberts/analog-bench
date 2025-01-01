
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1322',
    template: `<div class="benchmark-component">
    <h3>Component 1322</h3>
    <button type="button" (click)="increment1322()">
      Count {{ count1322() }}
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
  export class BenchmarkNg1322 {
    count1322 = signal(0);

    increment1322() {
      this.count1322.update((count) => count + 1);
    }
  }