
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-679',
    template: `<div class="benchmark-component">
    <h3>Component 679</h3>
    <button type="button" (click)="increment679()">
      Count {{ count679() }}
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
  export class BenchmarkNg679 {
    count679 = signal(0);

    increment679() {
      this.count679.update((count) => count + 1);
    }
  }