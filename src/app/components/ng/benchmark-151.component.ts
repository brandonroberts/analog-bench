
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-151',
    template: `<div class="benchmark-component">
    <h3>Component 151</h3>
    <button type="button" (click)="increment151()">
      Count {{ count151() }}
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
  export class BenchmarkNg151 {
    count151 = signal(0);

    increment151() {
      this.count151.update((count) => count + 1);
    }
  }