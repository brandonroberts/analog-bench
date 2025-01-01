
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-232',
    template: `<div class="benchmark-component">
    <h3>Component 232</h3>
    <button type="button" (click)="increment232()">
      Count {{ count232() }}
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
  export class BenchmarkNg232 {
    count232 = signal(0);

    increment232() {
      this.count232.update((count) => count + 1);
    }
  }