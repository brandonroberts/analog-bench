
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-400',
    template: `<div class="benchmark-component">
    <h3>Component 400</h3>
    <button type="button" (click)="increment400()">
      Count {{ count400() }}
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
  export class BenchmarkNg400 {
    count400 = signal(0);

    increment400() {
      this.count400.update((count) => count + 1);
    }
  }