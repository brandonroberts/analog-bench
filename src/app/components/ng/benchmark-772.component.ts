
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-772',
    template: `<div class="benchmark-component">
    <h3>Component 772</h3>
    <button type="button" (click)="increment772()">
      Count {{ count772() }}
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
  export class BenchmarkNg772 {
    count772 = signal(0);

    increment772() {
      this.count772.update((count) => count + 1);
    }
  }