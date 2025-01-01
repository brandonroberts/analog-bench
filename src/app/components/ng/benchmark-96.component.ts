
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-96',
    template: `<div class="benchmark-component">
    <h3>Component 96</h3>
    <button type="button" (click)="increment96()">
      Count {{ count96() }}
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
  export class BenchmarkNg96 {
    count96 = signal(0);

    increment96() {
      this.count96.update((count) => count + 1);
    }
  }