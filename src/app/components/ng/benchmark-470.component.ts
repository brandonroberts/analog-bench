
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-470',
    template: `<div class="benchmark-component">
    <h3>Component 470</h3>
    <button type="button" (click)="increment470()">
      Count {{ count470() }}
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
  export class BenchmarkNg470 {
    count470 = signal(0);

    increment470() {
      this.count470.update((count) => count + 1);
    }
  }