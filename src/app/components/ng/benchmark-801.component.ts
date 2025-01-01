
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-801',
    template: `<div class="benchmark-component">
    <h3>Component 801</h3>
    <button type="button" (click)="increment801()">
      Count {{ count801() }}
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
  export class BenchmarkNg801 {
    count801 = signal(0);

    increment801() {
      this.count801.update((count) => count + 1);
    }
  }