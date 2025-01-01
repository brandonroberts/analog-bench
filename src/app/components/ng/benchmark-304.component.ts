
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-304',
    template: `<div class="benchmark-component">
    <h3>Component 304</h3>
    <button type="button" (click)="increment304()">
      Count {{ count304() }}
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
  export class BenchmarkNg304 {
    count304 = signal(0);

    increment304() {
      this.count304.update((count) => count + 1);
    }
  }