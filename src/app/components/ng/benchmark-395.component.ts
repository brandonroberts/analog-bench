
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-395',
    template: `<div class="benchmark-component">
    <h3>Component 395</h3>
    <button type="button" (click)="increment395()">
      Count {{ count395() }}
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
  export class BenchmarkNg395 {
    count395 = signal(0);

    increment395() {
      this.count395.update((count) => count + 1);
    }
  }