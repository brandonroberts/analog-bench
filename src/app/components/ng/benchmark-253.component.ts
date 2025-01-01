
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-253',
    template: `<div class="benchmark-component">
    <h3>Component 253</h3>
    <button type="button" (click)="increment253()">
      Count {{ count253() }}
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
  export class BenchmarkNg253 {
    count253 = signal(0);

    increment253() {
      this.count253.update((count) => count + 1);
    }
  }