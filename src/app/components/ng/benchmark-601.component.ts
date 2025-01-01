
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-601',
    template: `<div class="benchmark-component">
    <h3>Component 601</h3>
    <button type="button" (click)="increment601()">
      Count {{ count601() }}
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
  export class BenchmarkNg601 {
    count601 = signal(0);

    increment601() {
      this.count601.update((count) => count + 1);
    }
  }