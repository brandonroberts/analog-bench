
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-672',
    template: `<div class="benchmark-component">
    <h3>Component 672</h3>
    <button type="button" (click)="increment672()">
      Count {{ count672() }}
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
  export class BenchmarkNg672 {
    count672 = signal(0);

    increment672() {
      this.count672.update((count) => count + 1);
    }
  }