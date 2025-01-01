
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1130',
    template: `<div class="benchmark-component">
    <h3>Component 1130</h3>
    <button type="button" (click)="increment1130()">
      Count {{ count1130() }}
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
  export class BenchmarkNg1130 {
    count1130 = signal(0);

    increment1130() {
      this.count1130.update((count) => count + 1);
    }
  }