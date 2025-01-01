
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-64',
    template: `<div class="benchmark-component">
    <h3>Component 64</h3>
    <button type="button" (click)="increment64()">
      Count {{ count64() }}
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
  export class BenchmarkNg64 {
    count64 = signal(0);

    increment64() {
      this.count64.update((count) => count + 1);
    }
  }