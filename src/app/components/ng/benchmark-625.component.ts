
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-625',
    template: `<div class="benchmark-component">
    <h3>Component 625</h3>
    <button type="button" (click)="increment625()">
      Count {{ count625() }}
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
  export class BenchmarkNg625 {
    count625 = signal(0);

    increment625() {
      this.count625.update((count) => count + 1);
    }
  }