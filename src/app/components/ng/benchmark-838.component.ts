
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-838',
    template: `<div class="benchmark-component">
    <h3>Component 838</h3>
    <button type="button" (click)="increment838()">
      Count {{ count838() }}
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
  export class BenchmarkNg838 {
    count838 = signal(0);

    increment838() {
      this.count838.update((count) => count + 1);
    }
  }