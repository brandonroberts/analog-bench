
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-92',
    template: `<div class="benchmark-component">
    <h3>Component 92</h3>
    <button type="button" (click)="increment92()">
      Count {{ count92() }}
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
  export class BenchmarkNg92 {
    count92 = signal(0);

    increment92() {
      this.count92.update((count) => count + 1);
    }
  }