
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-494',
    template: `<div class="benchmark-component">
    <h3>Component 494</h3>
    <button type="button" (click)="increment494()">
      Count {{ count494() }}
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
  export class BenchmarkNg494 {
    count494 = signal(0);

    increment494() {
      this.count494.update((count) => count + 1);
    }
  }