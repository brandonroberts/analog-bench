
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-341',
    template: `<div class="benchmark-component">
    <h3>Component 341</h3>
    <button type="button" (click)="increment341()">
      Count {{ count341() }}
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
  export class BenchmarkNg341 {
    count341 = signal(0);

    increment341() {
      this.count341.update((count) => count + 1);
    }
  }