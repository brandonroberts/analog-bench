
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1228',
    template: `<div class="benchmark-component">
    <h3>Component 1228</h3>
    <button type="button" (click)="increment1228()">
      Count {{ count1228() }}
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
  export class BenchmarkNg1228 {
    count1228 = signal(0);

    increment1228() {
      this.count1228.update((count) => count + 1);
    }
  }