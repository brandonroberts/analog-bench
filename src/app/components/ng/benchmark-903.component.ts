
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-903',
    template: `<div class="benchmark-component">
    <h3>Component 903</h3>
    <button type="button" (click)="increment903()">
      Count {{ count903() }}
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
  export class BenchmarkNg903 {
    count903 = signal(0);

    increment903() {
      this.count903.update((count) => count + 1);
    }
  }