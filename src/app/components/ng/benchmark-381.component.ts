
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-381',
    template: `<div class="benchmark-component">
    <h3>Component 381</h3>
    <button type="button" (click)="increment381()">
      Count {{ count381() }}
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
  export class BenchmarkNg381 {
    count381 = signal(0);

    increment381() {
      this.count381.update((count) => count + 1);
    }
  }