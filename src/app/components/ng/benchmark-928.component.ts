
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-928',
    template: `<div class="benchmark-component">
    <h3>Component 928</h3>
    <button type="button" (click)="increment928()">
      Count {{ count928() }}
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
  export class BenchmarkNg928 {
    count928 = signal(0);

    increment928() {
      this.count928.update((count) => count + 1);
    }
  }