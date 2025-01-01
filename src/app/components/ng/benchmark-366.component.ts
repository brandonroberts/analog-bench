
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-366',
    template: `<div class="benchmark-component">
    <h3>Component 366</h3>
    <button type="button" (click)="increment366()">
      Count {{ count366() }}
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
  export class BenchmarkNg366 {
    count366 = signal(0);

    increment366() {
      this.count366.update((count) => count + 1);
    }
  }