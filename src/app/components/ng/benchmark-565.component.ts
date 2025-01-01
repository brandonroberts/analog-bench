
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-565',
    template: `<div class="benchmark-component">
    <h3>Component 565</h3>
    <button type="button" (click)="increment565()">
      Count {{ count565() }}
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
  export class BenchmarkNg565 {
    count565 = signal(0);

    increment565() {
      this.count565.update((count) => count + 1);
    }
  }