
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-434',
    template: `<div class="benchmark-component">
    <h3>Component 434</h3>
    <button type="button" (click)="increment434()">
      Count {{ count434() }}
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
  export class BenchmarkNg434 {
    count434 = signal(0);

    increment434() {
      this.count434.update((count) => count + 1);
    }
  }