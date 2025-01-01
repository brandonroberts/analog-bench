
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-288',
    template: `<div class="benchmark-component">
    <h3>Component 288</h3>
    <button type="button" (click)="increment288()">
      Count {{ count288() }}
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
  export class BenchmarkNg288 {
    count288 = signal(0);

    increment288() {
      this.count288.update((count) => count + 1);
    }
  }