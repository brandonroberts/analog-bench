
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-336',
    template: `<div class="benchmark-component">
    <h3>Component 336</h3>
    <button type="button" (click)="increment336()">
      Count {{ count336() }}
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
  export class BenchmarkNg336 {
    count336 = signal(0);

    increment336() {
      this.count336.update((count) => count + 1);
    }
  }