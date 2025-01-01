
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-252',
    template: `<div class="benchmark-component">
    <h3>Component 252</h3>
    <button type="button" (click)="increment252()">
      Count {{ count252() }}
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
  export class BenchmarkNg252 {
    count252 = signal(0);

    increment252() {
      this.count252.update((count) => count + 1);
    }
  }