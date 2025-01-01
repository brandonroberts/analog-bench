
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-715',
    template: `<div class="benchmark-component">
    <h3>Component 715</h3>
    <button type="button" (click)="increment715()">
      Count {{ count715() }}
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
  export class BenchmarkNg715 {
    count715 = signal(0);

    increment715() {
      this.count715.update((count) => count + 1);
    }
  }