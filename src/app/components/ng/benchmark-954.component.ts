
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-954',
    template: `<div class="benchmark-component">
    <h3>Component 954</h3>
    <button type="button" (click)="increment954()">
      Count {{ count954() }}
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
  export class BenchmarkNg954 {
    count954 = signal(0);

    increment954() {
      this.count954.update((count) => count + 1);
    }
  }