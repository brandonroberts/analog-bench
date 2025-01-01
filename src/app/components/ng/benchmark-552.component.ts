
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-552',
    template: `<div class="benchmark-component">
    <h3>Component 552</h3>
    <button type="button" (click)="increment552()">
      Count {{ count552() }}
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
  export class BenchmarkNg552 {
    count552 = signal(0);

    increment552() {
      this.count552.update((count) => count + 1);
    }
  }