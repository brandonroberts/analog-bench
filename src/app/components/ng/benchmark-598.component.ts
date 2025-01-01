
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-598',
    template: `<div class="benchmark-component">
    <h3>Component 598</h3>
    <button type="button" (click)="increment598()">
      Count {{ count598() }}
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
  export class BenchmarkNg598 {
    count598 = signal(0);

    increment598() {
      this.count598.update((count) => count + 1);
    }
  }