
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-652',
    template: `<div class="benchmark-component">
    <h3>Component 652</h3>
    <button type="button" (click)="increment652()">
      Count {{ count652() }}
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
  export class BenchmarkNg652 {
    count652 = signal(0);

    increment652() {
      this.count652.update((count) => count + 1);
    }
  }