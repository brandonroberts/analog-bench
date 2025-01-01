
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-180',
    template: `<div class="benchmark-component">
    <h3>Component 180</h3>
    <button type="button" (click)="increment180()">
      Count {{ count180() }}
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
  export class BenchmarkNg180 {
    count180 = signal(0);

    increment180() {
      this.count180.update((count) => count + 1);
    }
  }