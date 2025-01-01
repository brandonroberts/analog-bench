
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-666',
    template: `<div class="benchmark-component">
    <h3>Component 666</h3>
    <button type="button" (click)="increment666()">
      Count {{ count666() }}
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
  export class BenchmarkNg666 {
    count666 = signal(0);

    increment666() {
      this.count666.update((count) => count + 1);
    }
  }