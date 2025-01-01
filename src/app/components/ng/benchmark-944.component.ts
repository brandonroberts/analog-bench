
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-944',
    template: `<div class="benchmark-component">
    <h3>Component 944</h3>
    <button type="button" (click)="increment944()">
      Count {{ count944() }}
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
  export class BenchmarkNg944 {
    count944 = signal(0);

    increment944() {
      this.count944.update((count) => count + 1);
    }
  }