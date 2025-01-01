
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-357',
    template: `<div class="benchmark-component">
    <h3>Component 357</h3>
    <button type="button" (click)="increment357()">
      Count {{ count357() }}
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
  export class BenchmarkNg357 {
    count357 = signal(0);

    increment357() {
      this.count357.update((count) => count + 1);
    }
  }