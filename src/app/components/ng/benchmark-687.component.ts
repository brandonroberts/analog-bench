
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-687',
    template: `<div class="benchmark-component">
    <h3>Component 687</h3>
    <button type="button" (click)="increment687()">
      Count {{ count687() }}
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
  export class BenchmarkNg687 {
    count687 = signal(0);

    increment687() {
      this.count687.update((count) => count + 1);
    }
  }