
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-965',
    template: `<div class="benchmark-component">
    <h3>Component 965</h3>
    <button type="button" (click)="increment965()">
      Count {{ count965() }}
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
  export class BenchmarkNg965 {
    count965 = signal(0);

    increment965() {
      this.count965.update((count) => count + 1);
    }
  }