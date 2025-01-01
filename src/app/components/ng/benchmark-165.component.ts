
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-165',
    template: `<div class="benchmark-component">
    <h3>Component 165</h3>
    <button type="button" (click)="increment165()">
      Count {{ count165() }}
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
  export class BenchmarkNg165 {
    count165 = signal(0);

    increment165() {
      this.count165.update((count) => count + 1);
    }
  }