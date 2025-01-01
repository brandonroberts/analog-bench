
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-905',
    template: `<div class="benchmark-component">
    <h3>Component 905</h3>
    <button type="button" (click)="increment905()">
      Count {{ count905() }}
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
  export class BenchmarkNg905 {
    count905 = signal(0);

    increment905() {
      this.count905.update((count) => count + 1);
    }
  }