
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-700',
    template: `<div class="benchmark-component">
    <h3>Component 700</h3>
    <button type="button" (click)="increment700()">
      Count {{ count700() }}
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
  export class BenchmarkNg700 {
    count700 = signal(0);

    increment700() {
      this.count700.update((count) => count + 1);
    }
  }