
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-308',
    template: `<div class="benchmark-component">
    <h3>Component 308</h3>
    <button type="button" (click)="increment308()">
      Count {{ count308() }}
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
  export class BenchmarkNg308 {
    count308 = signal(0);

    increment308() {
      this.count308.update((count) => count + 1);
    }
  }