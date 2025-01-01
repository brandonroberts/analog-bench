
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-208',
    template: `<div class="benchmark-component">
    <h3>Component 208</h3>
    <button type="button" (click)="increment208()">
      Count {{ count208() }}
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
  export class BenchmarkNg208 {
    count208 = signal(0);

    increment208() {
      this.count208.update((count) => count + 1);
    }
  }