
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-393',
    template: `<div class="benchmark-component">
    <h3>Component 393</h3>
    <button type="button" (click)="increment393()">
      Count {{ count393() }}
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
  export class BenchmarkNg393 {
    count393 = signal(0);

    increment393() {
      this.count393.update((count) => count + 1);
    }
  }