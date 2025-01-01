
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-581',
    template: `<div class="benchmark-component">
    <h3>Component 581</h3>
    <button type="button" (click)="increment581()">
      Count {{ count581() }}
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
  export class BenchmarkNg581 {
    count581 = signal(0);

    increment581() {
      this.count581.update((count) => count + 1);
    }
  }