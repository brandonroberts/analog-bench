
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-274',
    template: `<div class="benchmark-component">
    <h3>Component 274</h3>
    <button type="button" (click)="increment274()">
      Count {{ count274() }}
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
  export class BenchmarkNg274 {
    count274 = signal(0);

    increment274() {
      this.count274.update((count) => count + 1);
    }
  }