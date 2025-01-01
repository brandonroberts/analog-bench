
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-98',
    template: `<div class="benchmark-component">
    <h3>Component 98</h3>
    <button type="button" (click)="increment98()">
      Count {{ count98() }}
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
  export class BenchmarkNg98 {
    count98 = signal(0);

    increment98() {
      this.count98.update((count) => count + 1);
    }
  }