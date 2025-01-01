
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-124',
    template: `<div class="benchmark-component">
    <h3>Component 124</h3>
    <button type="button" (click)="increment124()">
      Count {{ count124() }}
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
  export class BenchmarkNg124 {
    count124 = signal(0);

    increment124() {
      this.count124.update((count) => count + 1);
    }
  }