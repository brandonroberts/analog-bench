
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-520',
    template: `<div class="benchmark-component">
    <h3>Component 520</h3>
    <button type="button" (click)="increment520()">
      Count {{ count520() }}
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
  export class BenchmarkNg520 {
    count520 = signal(0);

    increment520() {
      this.count520.update((count) => count + 1);
    }
  }