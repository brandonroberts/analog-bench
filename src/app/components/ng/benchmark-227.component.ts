
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-227',
    template: `<div class="benchmark-component">
    <h3>Component 227</h3>
    <button type="button" (click)="increment227()">
      Count {{ count227() }}
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
  export class BenchmarkNg227 {
    count227 = signal(0);

    increment227() {
      this.count227.update((count) => count + 1);
    }
  }