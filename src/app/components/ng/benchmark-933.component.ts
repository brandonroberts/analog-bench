
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-933',
    template: `<div class="benchmark-component">
    <h3>Component 933</h3>
    <button type="button" (click)="increment933()">
      Count {{ count933() }}
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
  export class BenchmarkNg933 {
    count933 = signal(0);

    increment933() {
      this.count933.update((count) => count + 1);
    }
  }