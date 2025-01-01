
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-146',
    template: `<div class="benchmark-component">
    <h3>Component 146</h3>
    <button type="button" (click)="increment146()">
      Count {{ count146() }}
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
  export class BenchmarkNg146 {
    count146 = signal(0);

    increment146() {
      this.count146.update((count) => count + 1);
    }
  }