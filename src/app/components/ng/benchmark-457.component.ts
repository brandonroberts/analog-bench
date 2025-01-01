
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-457',
    template: `<div class="benchmark-component">
    <h3>Component 457</h3>
    <button type="button" (click)="increment457()">
      Count {{ count457() }}
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
  export class BenchmarkNg457 {
    count457 = signal(0);

    increment457() {
      this.count457.update((count) => count + 1);
    }
  }