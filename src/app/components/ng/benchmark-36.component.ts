
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-36',
    template: `<div class="benchmark-component">
    <h3>Component 36</h3>
    <button type="button" (click)="increment36()">
      Count {{ count36() }}
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
  export class BenchmarkNg36 {
    count36 = signal(0);

    increment36() {
      this.count36.update((count) => count + 1);
    }
  }