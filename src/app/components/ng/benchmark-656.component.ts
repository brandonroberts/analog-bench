
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-656',
    template: `<div class="benchmark-component">
    <h3>Component 656</h3>
    <button type="button" (click)="increment656()">
      Count {{ count656() }}
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
  export class BenchmarkNg656 {
    count656 = signal(0);

    increment656() {
      this.count656.update((count) => count + 1);
    }
  }