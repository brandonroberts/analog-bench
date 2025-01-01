
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-18',
    template: `<div class="benchmark-component">
    <h3>Component 18</h3>
    <button type="button" (click)="increment18()">
      Count {{ count18() }}
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
  export class BenchmarkNg18 {
    count18 = signal(0);

    increment18() {
      this.count18.update((count) => count + 1);
    }
  }