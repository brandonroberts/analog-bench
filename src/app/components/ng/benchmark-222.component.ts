
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-222',
    template: `<div class="benchmark-component">
    <h3>Component 222</h3>
    <button type="button" (click)="increment222()">
      Count {{ count222() }}
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
  export class BenchmarkNg222 {
    count222 = signal(0);

    increment222() {
      this.count222.update((count) => count + 1);
    }
  }