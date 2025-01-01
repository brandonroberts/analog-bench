
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-549',
    template: `<div class="benchmark-component">
    <h3>Component 549</h3>
    <button type="button" (click)="increment549()">
      Count {{ count549() }}
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
  export class BenchmarkNg549 {
    count549 = signal(0);

    increment549() {
      this.count549.update((count) => count + 1);
    }
  }