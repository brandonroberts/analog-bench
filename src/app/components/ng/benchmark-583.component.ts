
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-583',
    template: `<div class="benchmark-component">
    <h3>Component 583</h3>
    <button type="button" (click)="increment583()">
      Count {{ count583() }}
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
  export class BenchmarkNg583 {
    count583 = signal(0);

    increment583() {
      this.count583.update((count) => count + 1);
    }
  }