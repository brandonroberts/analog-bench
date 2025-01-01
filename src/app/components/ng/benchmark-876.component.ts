
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-876',
    template: `<div class="benchmark-component">
    <h3>Component 876</h3>
    <button type="button" (click)="increment876()">
      Count {{ count876() }}
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
  export class BenchmarkNg876 {
    count876 = signal(0);

    increment876() {
      this.count876.update((count) => count + 1);
    }
  }