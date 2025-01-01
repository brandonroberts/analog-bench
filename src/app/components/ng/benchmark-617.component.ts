
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-617',
    template: `<div class="benchmark-component">
    <h3>Component 617</h3>
    <button type="button" (click)="increment617()">
      Count {{ count617() }}
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
  export class BenchmarkNg617 {
    count617 = signal(0);

    increment617() {
      this.count617.update((count) => count + 1);
    }
  }