
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-603',
    template: `<div class="benchmark-component">
    <h3>Component 603</h3>
    <button type="button" (click)="increment603()">
      Count {{ count603() }}
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
  export class BenchmarkNg603 {
    count603 = signal(0);

    increment603() {
      this.count603.update((count) => count + 1);
    }
  }