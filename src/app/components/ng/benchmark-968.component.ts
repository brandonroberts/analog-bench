
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-968',
    template: `<div class="benchmark-component">
    <h3>Component 968</h3>
    <button type="button" (click)="increment968()">
      Count {{ count968() }}
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
  export class BenchmarkNg968 {
    count968 = signal(0);

    increment968() {
      this.count968.update((count) => count + 1);
    }
  }