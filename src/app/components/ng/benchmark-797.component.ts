
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-797',
    template: `<div class="benchmark-component">
    <h3>Component 797</h3>
    <button type="button" (click)="increment797()">
      Count {{ count797() }}
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
  export class BenchmarkNg797 {
    count797 = signal(0);

    increment797() {
      this.count797.update((count) => count + 1);
    }
  }