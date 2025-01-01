
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-26',
    template: `<div class="benchmark-component">
    <h3>Component 26</h3>
    <button type="button" (click)="increment26()">
      Count {{ count26() }}
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
  export class BenchmarkNg26 {
    count26 = signal(0);

    increment26() {
      this.count26.update((count) => count + 1);
    }
  }