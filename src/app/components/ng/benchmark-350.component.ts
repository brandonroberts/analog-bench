
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-350',
    template: `<div class="benchmark-component">
    <h3>Component 350</h3>
    <button type="button" (click)="increment350()">
      Count {{ count350() }}
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
  export class BenchmarkNg350 {
    count350 = signal(0);

    increment350() {
      this.count350.update((count) => count + 1);
    }
  }