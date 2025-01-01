
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-795',
    template: `<div class="benchmark-component">
    <h3>Component 795</h3>
    <button type="button" (click)="increment795()">
      Count {{ count795() }}
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
  export class BenchmarkNg795 {
    count795 = signal(0);

    increment795() {
      this.count795.update((count) => count + 1);
    }
  }