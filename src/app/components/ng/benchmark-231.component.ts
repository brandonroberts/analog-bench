
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-231',
    template: `<div class="benchmark-component">
    <h3>Component 231</h3>
    <button type="button" (click)="increment231()">
      Count {{ count231() }}
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
  export class BenchmarkNg231 {
    count231 = signal(0);

    increment231() {
      this.count231.update((count) => count + 1);
    }
  }