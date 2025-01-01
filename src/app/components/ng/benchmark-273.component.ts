
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-273',
    template: `<div class="benchmark-component">
    <h3>Component 273</h3>
    <button type="button" (click)="increment273()">
      Count {{ count273() }}
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
  export class BenchmarkNg273 {
    count273 = signal(0);

    increment273() {
      this.count273.update((count) => count + 1);
    }
  }