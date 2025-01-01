
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-479',
    template: `<div class="benchmark-component">
    <h3>Component 479</h3>
    <button type="button" (click)="increment479()">
      Count {{ count479() }}
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
  export class BenchmarkNg479 {
    count479 = signal(0);

    increment479() {
      this.count479.update((count) => count + 1);
    }
  }