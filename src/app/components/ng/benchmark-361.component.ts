
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-361',
    template: `<div class="benchmark-component">
    <h3>Component 361</h3>
    <button type="button" (click)="increment361()">
      Count {{ count361() }}
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
  export class BenchmarkNg361 {
    count361 = signal(0);

    increment361() {
      this.count361.update((count) => count + 1);
    }
  }