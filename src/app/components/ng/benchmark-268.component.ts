
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-268',
    template: `<div class="benchmark-component">
    <h3>Component 268</h3>
    <button type="button" (click)="increment268()">
      Count {{ count268() }}
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
  export class BenchmarkNg268 {
    count268 = signal(0);

    increment268() {
      this.count268.update((count) => count + 1);
    }
  }