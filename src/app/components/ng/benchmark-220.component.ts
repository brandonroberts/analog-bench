
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-220',
    template: `<div class="benchmark-component">
    <h3>Component 220</h3>
    <button type="button" (click)="increment220()">
      Count {{ count220() }}
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
  export class BenchmarkNg220 {
    count220 = signal(0);

    increment220() {
      this.count220.update((count) => count + 1);
    }
  }