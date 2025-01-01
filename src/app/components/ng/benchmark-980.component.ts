
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-980',
    template: `<div class="benchmark-component">
    <h3>Component 980</h3>
    <button type="button" (click)="increment980()">
      Count {{ count980() }}
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
  export class BenchmarkNg980 {
    count980 = signal(0);

    increment980() {
      this.count980.update((count) => count + 1);
    }
  }