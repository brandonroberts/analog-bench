
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-619',
    template: `<div class="benchmark-component">
    <h3>Component 619</h3>
    <button type="button" (click)="increment619()">
      Count {{ count619() }}
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
  export class BenchmarkNg619 {
    count619 = signal(0);

    increment619() {
      this.count619.update((count) => count + 1);
    }
  }