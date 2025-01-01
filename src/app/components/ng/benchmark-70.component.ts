
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-70',
    template: `<div class="benchmark-component">
    <h3>Component 70</h3>
    <button type="button" (click)="increment70()">
      Count {{ count70() }}
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
  export class BenchmarkNg70 {
    count70 = signal(0);

    increment70() {
      this.count70.update((count) => count + 1);
    }
  }