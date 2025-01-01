
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-869',
    template: `<div class="benchmark-component">
    <h3>Component 869</h3>
    <button type="button" (click)="increment869()">
      Count {{ count869() }}
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
  export class BenchmarkNg869 {
    count869 = signal(0);

    increment869() {
      this.count869.update((count) => count + 1);
    }
  }