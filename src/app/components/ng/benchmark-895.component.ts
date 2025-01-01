
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-895',
    template: `<div class="benchmark-component">
    <h3>Component 895</h3>
    <button type="button" (click)="increment895()">
      Count {{ count895() }}
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
  export class BenchmarkNg895 {
    count895 = signal(0);

    increment895() {
      this.count895.update((count) => count + 1);
    }
  }