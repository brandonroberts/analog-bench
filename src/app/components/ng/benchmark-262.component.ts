
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-262',
    template: `<div class="benchmark-component">
    <h3>Component 262</h3>
    <button type="button" (click)="increment262()">
      Count {{ count262() }}
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
  export class BenchmarkNg262 {
    count262 = signal(0);

    increment262() {
      this.count262.update((count) => count + 1);
    }
  }