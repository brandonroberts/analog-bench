
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-25',
    template: `<div class="benchmark-component">
    <h3>Component 25</h3>
    <button type="button" (click)="increment25()">
      Count {{ count25() }}
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
  export class BenchmarkNg25 {
    count25 = signal(0);

    increment25() {
      this.count25.update((count) => count + 1);
    }
  }