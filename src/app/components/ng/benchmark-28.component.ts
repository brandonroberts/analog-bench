
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-28',
    template: `<div class="benchmark-component">
    <h3>Component 28</h3>
    <button type="button" (click)="increment28()">
      Count {{ count28() }}
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
  export class BenchmarkNg28 {
    count28 = signal(0);

    increment28() {
      this.count28.update((count) => count + 1);
    }
  }