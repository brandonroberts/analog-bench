
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-412',
    template: `<div class="benchmark-component">
    <h3>Component 412</h3>
    <button type="button" (click)="increment412()">
      Count {{ count412() }}
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
  export class BenchmarkNg412 {
    count412 = signal(0);

    increment412() {
      this.count412.update((count) => count + 1);
    }
  }