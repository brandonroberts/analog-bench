
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-529',
    template: `<div class="benchmark-component">
    <h3>Component 529</h3>
    <button type="button" (click)="increment529()">
      Count {{ count529() }}
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
  export class BenchmarkNg529 {
    count529 = signal(0);

    increment529() {
      this.count529.update((count) => count + 1);
    }
  }