
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-534',
    template: `<div class="benchmark-component">
    <h3>Component 534</h3>
    <button type="button" (click)="increment534()">
      Count {{ count534() }}
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
  export class BenchmarkNg534 {
    count534 = signal(0);

    increment534() {
      this.count534.update((count) => count + 1);
    }
  }