
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-228',
    template: `<div class="benchmark-component">
    <h3>Component 228</h3>
    <button type="button" (click)="increment228()">
      Count {{ count228() }}
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
  export class BenchmarkNg228 {
    count228 = signal(0);

    increment228() {
      this.count228.update((count) => count + 1);
    }
  }