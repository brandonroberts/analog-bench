
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-333',
    template: `<div class="benchmark-component">
    <h3>Component 333</h3>
    <button type="button" (click)="increment333()">
      Count {{ count333() }}
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
  export class BenchmarkNg333 {
    count333 = signal(0);

    increment333() {
      this.count333.update((count) => count + 1);
    }
  }