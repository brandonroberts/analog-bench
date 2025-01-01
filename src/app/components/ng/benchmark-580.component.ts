
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-580',
    template: `<div class="benchmark-component">
    <h3>Component 580</h3>
    <button type="button" (click)="increment580()">
      Count {{ count580() }}
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
  export class BenchmarkNg580 {
    count580 = signal(0);

    increment580() {
      this.count580.update((count) => count + 1);
    }
  }