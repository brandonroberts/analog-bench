
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-331',
    template: `<div class="benchmark-component">
    <h3>Component 331</h3>
    <button type="button" (click)="increment331()">
      Count {{ count331() }}
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
  export class BenchmarkNg331 {
    count331 = signal(0);

    increment331() {
      this.count331.update((count) => count + 1);
    }
  }