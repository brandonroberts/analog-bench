
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-810',
    template: `<div class="benchmark-component">
    <h3>Component 810</h3>
    <button type="button" (click)="increment810()">
      Count {{ count810() }}
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
  export class BenchmarkNg810 {
    count810 = signal(0);

    increment810() {
      this.count810.update((count) => count + 1);
    }
  }