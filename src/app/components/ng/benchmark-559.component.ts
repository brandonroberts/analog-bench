
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-559',
    template: `<div class="benchmark-component">
    <h3>Component 559</h3>
    <button type="button" (click)="increment559()">
      Count {{ count559() }}
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
  export class BenchmarkNg559 {
    count559 = signal(0);

    increment559() {
      this.count559.update((count) => count + 1);
    }
  }