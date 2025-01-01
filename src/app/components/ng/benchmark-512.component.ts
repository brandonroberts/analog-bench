
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-512',
    template: `<div class="benchmark-component">
    <h3>Component 512</h3>
    <button type="button" (click)="increment512()">
      Count {{ count512() }}
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
  export class BenchmarkNg512 {
    count512 = signal(0);

    increment512() {
      this.count512.update((count) => count + 1);
    }
  }