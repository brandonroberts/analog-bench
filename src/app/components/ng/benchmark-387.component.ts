
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-387',
    template: `<div class="benchmark-component">
    <h3>Component 387</h3>
    <button type="button" (click)="increment387()">
      Count {{ count387() }}
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
  export class BenchmarkNg387 {
    count387 = signal(0);

    increment387() {
      this.count387.update((count) => count + 1);
    }
  }