
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1100',
    template: `<div class="benchmark-component">
    <h3>Component 1100</h3>
    <button type="button" (click)="increment1100()">
      Count {{ count1100() }}
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
  export class BenchmarkNg1100 {
    count1100 = signal(0);

    increment1100() {
      this.count1100.update((count) => count + 1);
    }
  }