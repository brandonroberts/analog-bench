
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-263',
    template: `<div class="benchmark-component">
    <h3>Component 263</h3>
    <button type="button" (click)="increment263()">
      Count {{ count263() }}
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
  export class BenchmarkNg263 {
    count263 = signal(0);

    increment263() {
      this.count263.update((count) => count + 1);
    }
  }