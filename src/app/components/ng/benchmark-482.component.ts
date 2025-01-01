
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-482',
    template: `<div class="benchmark-component">
    <h3>Component 482</h3>
    <button type="button" (click)="increment482()">
      Count {{ count482() }}
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
  export class BenchmarkNg482 {
    count482 = signal(0);

    increment482() {
      this.count482.update((count) => count + 1);
    }
  }