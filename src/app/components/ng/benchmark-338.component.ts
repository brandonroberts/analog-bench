
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-338',
    template: `<div class="benchmark-component">
    <h3>Component 338</h3>
    <button type="button" (click)="increment338()">
      Count {{ count338() }}
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
  export class BenchmarkNg338 {
    count338 = signal(0);

    increment338() {
      this.count338.update((count) => count + 1);
    }
  }