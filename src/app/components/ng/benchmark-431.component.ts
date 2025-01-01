
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-431',
    template: `<div class="benchmark-component">
    <h3>Component 431</h3>
    <button type="button" (click)="increment431()">
      Count {{ count431() }}
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
  export class BenchmarkNg431 {
    count431 = signal(0);

    increment431() {
      this.count431.update((count) => count + 1);
    }
  }