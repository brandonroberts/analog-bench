
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-588',
    template: `<div class="benchmark-component">
    <h3>Component 588</h3>
    <button type="button" (click)="increment588()">
      Count {{ count588() }}
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
  export class BenchmarkNg588 {
    count588 = signal(0);

    increment588() {
      this.count588.update((count) => count + 1);
    }
  }