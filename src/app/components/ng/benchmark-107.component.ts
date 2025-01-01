
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-107',
    template: `<div class="benchmark-component">
    <h3>Component 107</h3>
    <button type="button" (click)="increment107()">
      Count {{ count107() }}
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
  export class BenchmarkNg107 {
    count107 = signal(0);

    increment107() {
      this.count107.update((count) => count + 1);
    }
  }