
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-754',
    template: `<div class="benchmark-component">
    <h3>Component 754</h3>
    <button type="button" (click)="increment754()">
      Count {{ count754() }}
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
  export class BenchmarkNg754 {
    count754 = signal(0);

    increment754() {
      this.count754.update((count) => count + 1);
    }
  }