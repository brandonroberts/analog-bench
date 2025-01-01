
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-471',
    template: `<div class="benchmark-component">
    <h3>Component 471</h3>
    <button type="button" (click)="increment471()">
      Count {{ count471() }}
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
  export class BenchmarkNg471 {
    count471 = signal(0);

    increment471() {
      this.count471.update((count) => count + 1);
    }
  }