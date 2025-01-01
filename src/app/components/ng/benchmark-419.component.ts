
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-419',
    template: `<div class="benchmark-component">
    <h3>Component 419</h3>
    <button type="button" (click)="increment419()">
      Count {{ count419() }}
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
  export class BenchmarkNg419 {
    count419 = signal(0);

    increment419() {
      this.count419.update((count) => count + 1);
    }
  }