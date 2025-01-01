
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-842',
    template: `<div class="benchmark-component">
    <h3>Component 842</h3>
    <button type="button" (click)="increment842()">
      Count {{ count842() }}
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
  export class BenchmarkNg842 {
    count842 = signal(0);

    increment842() {
      this.count842.update((count) => count + 1);
    }
  }