
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-21',
    template: `<div class="benchmark-component">
    <h3>Component 21</h3>
    <button type="button" (click)="increment21()">
      Count {{ count21() }}
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
  export class BenchmarkNg21 {
    count21 = signal(0);

    increment21() {
      this.count21.update((count) => count + 1);
    }
  }