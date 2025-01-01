
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-678',
    template: `<div class="benchmark-component">
    <h3>Component 678</h3>
    <button type="button" (click)="increment678()">
      Count {{ count678() }}
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
  export class BenchmarkNg678 {
    count678 = signal(0);

    increment678() {
      this.count678.update((count) => count + 1);
    }
  }