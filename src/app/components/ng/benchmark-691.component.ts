
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-691',
    template: `<div class="benchmark-component">
    <h3>Component 691</h3>
    <button type="button" (click)="increment691()">
      Count {{ count691() }}
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
  export class BenchmarkNg691 {
    count691 = signal(0);

    increment691() {
      this.count691.update((count) => count + 1);
    }
  }