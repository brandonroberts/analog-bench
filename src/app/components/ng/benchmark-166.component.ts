
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-166',
    template: `<div class="benchmark-component">
    <h3>Component 166</h3>
    <button type="button" (click)="increment166()">
      Count {{ count166() }}
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
  export class BenchmarkNg166 {
    count166 = signal(0);

    increment166() {
      this.count166.update((count) => count + 1);
    }
  }