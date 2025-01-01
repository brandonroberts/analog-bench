
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-181',
    template: `<div class="benchmark-component">
    <h3>Component 181</h3>
    <button type="button" (click)="increment181()">
      Count {{ count181() }}
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
  export class BenchmarkNg181 {
    count181 = signal(0);

    increment181() {
      this.count181.update((count) => count + 1);
    }
  }