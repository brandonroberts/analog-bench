
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-411',
    template: `<div class="benchmark-component">
    <h3>Component 411</h3>
    <button type="button" (click)="increment411()">
      Count {{ count411() }}
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
  export class BenchmarkNg411 {
    count411 = signal(0);

    increment411() {
      this.count411.update((count) => count + 1);
    }
  }