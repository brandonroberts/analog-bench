
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-602',
    template: `<div class="benchmark-component">
    <h3>Component 602</h3>
    <button type="button" (click)="increment602()">
      Count {{ count602() }}
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
  export class BenchmarkNg602 {
    count602 = signal(0);

    increment602() {
      this.count602.update((count) => count + 1);
    }
  }