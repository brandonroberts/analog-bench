
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-535',
    template: `<div class="benchmark-component">
    <h3>Component 535</h3>
    <button type="button" (click)="increment535()">
      Count {{ count535() }}
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
  export class BenchmarkNg535 {
    count535 = signal(0);

    increment535() {
      this.count535.update((count) => count + 1);
    }
  }