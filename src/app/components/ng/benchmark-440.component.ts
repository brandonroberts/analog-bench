
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-440',
    template: `<div class="benchmark-component">
    <h3>Component 440</h3>
    <button type="button" (click)="increment440()">
      Count {{ count440() }}
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
  export class BenchmarkNg440 {
    count440 = signal(0);

    increment440() {
      this.count440.update((count) => count + 1);
    }
  }