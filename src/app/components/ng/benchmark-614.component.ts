
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-614',
    template: `<div class="benchmark-component">
    <h3>Component 614</h3>
    <button type="button" (click)="increment614()">
      Count {{ count614() }}
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
  export class BenchmarkNg614 {
    count614 = signal(0);

    increment614() {
      this.count614.update((count) => count + 1);
    }
  }