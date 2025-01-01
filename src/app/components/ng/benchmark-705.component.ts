
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-705',
    template: `<div class="benchmark-component">
    <h3>Component 705</h3>
    <button type="button" (click)="increment705()">
      Count {{ count705() }}
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
  export class BenchmarkNg705 {
    count705 = signal(0);

    increment705() {
      this.count705.update((count) => count + 1);
    }
  }