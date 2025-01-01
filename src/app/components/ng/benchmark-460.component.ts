
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-460',
    template: `<div class="benchmark-component">
    <h3>Component 460</h3>
    <button type="button" (click)="increment460()">
      Count {{ count460() }}
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
  export class BenchmarkNg460 {
    count460 = signal(0);

    increment460() {
      this.count460.update((count) => count + 1);
    }
  }