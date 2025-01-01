
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-391',
    template: `<div class="benchmark-component">
    <h3>Component 391</h3>
    <button type="button" (click)="increment391()">
      Count {{ count391() }}
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
  export class BenchmarkNg391 {
    count391 = signal(0);

    increment391() {
      this.count391.update((count) => count + 1);
    }
  }