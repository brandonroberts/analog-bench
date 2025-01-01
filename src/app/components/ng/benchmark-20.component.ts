
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-20',
    template: `<div class="benchmark-component">
    <h3>Component 20</h3>
    <button type="button" (click)="increment20()">
      Count {{ count20() }}
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
  export class BenchmarkNg20 {
    count20 = signal(0);

    increment20() {
      this.count20.update((count) => count + 1);
    }
  }