
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-609',
    template: `<div class="benchmark-component">
    <h3>Component 609</h3>
    <button type="button" (click)="increment609()">
      Count {{ count609() }}
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
  export class BenchmarkNg609 {
    count609 = signal(0);

    increment609() {
      this.count609.update((count) => count + 1);
    }
  }