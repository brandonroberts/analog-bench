
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-244',
    template: `<div class="benchmark-component">
    <h3>Component 244</h3>
    <button type="button" (click)="increment244()">
      Count {{ count244() }}
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
  export class BenchmarkNg244 {
    count244 = signal(0);

    increment244() {
      this.count244.update((count) => count + 1);
    }
  }