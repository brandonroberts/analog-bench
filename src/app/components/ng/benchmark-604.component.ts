
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-604',
    template: `<div class="benchmark-component">
    <h3>Component 604</h3>
    <button type="button" (click)="increment604()">
      Count {{ count604() }}
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
  export class BenchmarkNg604 {
    count604 = signal(0);

    increment604() {
      this.count604.update((count) => count + 1);
    }
  }