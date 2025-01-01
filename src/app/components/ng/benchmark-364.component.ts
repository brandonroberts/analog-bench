
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-364',
    template: `<div class="benchmark-component">
    <h3>Component 364</h3>
    <button type="button" (click)="increment364()">
      Count {{ count364() }}
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
  export class BenchmarkNg364 {
    count364 = signal(0);

    increment364() {
      this.count364.update((count) => count + 1);
    }
  }