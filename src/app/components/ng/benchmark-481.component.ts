
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-481',
    template: `<div class="benchmark-component">
    <h3>Component 481</h3>
    <button type="button" (click)="increment481()">
      Count {{ count481() }}
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
  export class BenchmarkNg481 {
    count481 = signal(0);

    increment481() {
      this.count481.update((count) => count + 1);
    }
  }