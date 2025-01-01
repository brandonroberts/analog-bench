
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-189',
    template: `<div class="benchmark-component">
    <h3>Component 189</h3>
    <button type="button" (click)="increment189()">
      Count {{ count189() }}
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
  export class BenchmarkNg189 {
    count189 = signal(0);

    increment189() {
      this.count189.update((count) => count + 1);
    }
  }