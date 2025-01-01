
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-152',
    template: `<div class="benchmark-component">
    <h3>Component 152</h3>
    <button type="button" (click)="increment152()">
      Count {{ count152() }}
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
  export class BenchmarkNg152 {
    count152 = signal(0);

    increment152() {
      this.count152.update((count) => count + 1);
    }
  }