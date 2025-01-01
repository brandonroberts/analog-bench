
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-118',
    template: `<div class="benchmark-component">
    <h3>Component 118</h3>
    <button type="button" (click)="increment118()">
      Count {{ count118() }}
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
  export class BenchmarkNg118 {
    count118 = signal(0);

    increment118() {
      this.count118.update((count) => count + 1);
    }
  }