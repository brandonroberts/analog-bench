
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-942',
    template: `<div class="benchmark-component">
    <h3>Component 942</h3>
    <button type="button" (click)="increment942()">
      Count {{ count942() }}
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
  export class BenchmarkNg942 {
    count942 = signal(0);

    increment942() {
      this.count942.update((count) => count + 1);
    }
  }