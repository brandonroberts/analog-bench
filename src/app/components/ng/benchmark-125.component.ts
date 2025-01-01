
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-125',
    template: `<div class="benchmark-component">
    <h3>Component 125</h3>
    <button type="button" (click)="increment125()">
      Count {{ count125() }}
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
  export class BenchmarkNg125 {
    count125 = signal(0);

    increment125() {
      this.count125.update((count) => count + 1);
    }
  }