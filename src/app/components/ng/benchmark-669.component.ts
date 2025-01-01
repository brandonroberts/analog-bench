
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-669',
    template: `<div class="benchmark-component">
    <h3>Component 669</h3>
    <button type="button" (click)="increment669()">
      Count {{ count669() }}
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
  export class BenchmarkNg669 {
    count669 = signal(0);

    increment669() {
      this.count669.update((count) => count + 1);
    }
  }