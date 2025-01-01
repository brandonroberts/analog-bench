
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-698',
    template: `<div class="benchmark-component">
    <h3>Component 698</h3>
    <button type="button" (click)="increment698()">
      Count {{ count698() }}
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
  export class BenchmarkNg698 {
    count698 = signal(0);

    increment698() {
      this.count698.update((count) => count + 1);
    }
  }