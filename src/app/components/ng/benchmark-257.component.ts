
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-257',
    template: `<div class="benchmark-component">
    <h3>Component 257</h3>
    <button type="button" (click)="increment257()">
      Count {{ count257() }}
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
  export class BenchmarkNg257 {
    count257 = signal(0);

    increment257() {
      this.count257.update((count) => count + 1);
    }
  }