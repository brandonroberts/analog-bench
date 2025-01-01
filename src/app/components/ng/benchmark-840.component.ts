
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-840',
    template: `<div class="benchmark-component">
    <h3>Component 840</h3>
    <button type="button" (click)="increment840()">
      Count {{ count840() }}
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
  export class BenchmarkNg840 {
    count840 = signal(0);

    increment840() {
      this.count840.update((count) => count + 1);
    }
  }