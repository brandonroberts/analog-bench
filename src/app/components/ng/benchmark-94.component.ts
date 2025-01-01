
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-94',
    template: `<div class="benchmark-component">
    <h3>Component 94</h3>
    <button type="button" (click)="increment94()">
      Count {{ count94() }}
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
  export class BenchmarkNg94 {
    count94 = signal(0);

    increment94() {
      this.count94.update((count) => count + 1);
    }
  }