
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-416',
    template: `<div class="benchmark-component">
    <h3>Component 416</h3>
    <button type="button" (click)="increment416()">
      Count {{ count416() }}
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
  export class BenchmarkNg416 {
    count416 = signal(0);

    increment416() {
      this.count416.update((count) => count + 1);
    }
  }