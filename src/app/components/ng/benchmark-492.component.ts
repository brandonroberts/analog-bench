
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-492',
    template: `<div class="benchmark-component">
    <h3>Component 492</h3>
    <button type="button" (click)="increment492()">
      Count {{ count492() }}
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
  export class BenchmarkNg492 {
    count492 = signal(0);

    increment492() {
      this.count492.update((count) => count + 1);
    }
  }