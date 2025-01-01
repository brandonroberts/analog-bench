
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-97',
    template: `<div class="benchmark-component">
    <h3>Component 97</h3>
    <button type="button" (click)="increment97()">
      Count {{ count97() }}
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
  export class BenchmarkNg97 {
    count97 = signal(0);

    increment97() {
      this.count97.update((count) => count + 1);
    }
  }