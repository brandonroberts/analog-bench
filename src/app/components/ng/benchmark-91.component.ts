
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-91',
    template: `<div class="benchmark-component">
    <h3>Component 91</h3>
    <button type="button" (click)="increment91()">
      Count {{ count91() }}
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
  export class BenchmarkNg91 {
    count91 = signal(0);

    increment91() {
      this.count91.update((count) => count + 1);
    }
  }