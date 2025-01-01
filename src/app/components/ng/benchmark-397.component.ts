
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-397',
    template: `<div class="benchmark-component">
    <h3>Component 397</h3>
    <button type="button" (click)="increment397()">
      Count {{ count397() }}
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
  export class BenchmarkNg397 {
    count397 = signal(0);

    increment397() {
      this.count397.update((count) => count + 1);
    }
  }