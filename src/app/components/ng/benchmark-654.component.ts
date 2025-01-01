
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-654',
    template: `<div class="benchmark-component">
    <h3>Component 654</h3>
    <button type="button" (click)="increment654()">
      Count {{ count654() }}
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
  export class BenchmarkNg654 {
    count654 = signal(0);

    increment654() {
      this.count654.update((count) => count + 1);
    }
  }