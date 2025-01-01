
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-655',
    template: `<div class="benchmark-component">
    <h3>Component 655</h3>
    <button type="button" (click)="increment655()">
      Count {{ count655() }}
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
  export class BenchmarkNg655 {
    count655 = signal(0);

    increment655() {
      this.count655.update((count) => count + 1);
    }
  }