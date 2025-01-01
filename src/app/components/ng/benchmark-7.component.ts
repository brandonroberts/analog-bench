
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-7',
    template: `<div class="benchmark-component">
    <h3>Component 7</h3>
    <button type="button" (click)="increment7()">
      Count {{ count7() }}
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
  export class BenchmarkNg7 {
    count7 = signal(0);

    increment7() {
      this.count7.update((count) => count + 1);
    }
  }