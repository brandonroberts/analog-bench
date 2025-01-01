
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-454',
    template: `<div class="benchmark-component">
    <h3>Component 454</h3>
    <button type="button" (click)="increment454()">
      Count {{ count454() }}
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
  export class BenchmarkNg454 {
    count454 = signal(0);

    increment454() {
      this.count454.update((count) => count + 1);
    }
  }