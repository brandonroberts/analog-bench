
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-607',
    template: `<div class="benchmark-component">
    <h3>Component 607</h3>
    <button type="button" (click)="increment607()">
      Count {{ count607() }}
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
  export class BenchmarkNg607 {
    count607 = signal(0);

    increment607() {
      this.count607.update((count) => count + 1);
    }
  }