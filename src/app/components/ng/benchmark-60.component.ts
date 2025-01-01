
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-60',
    template: `<div class="benchmark-component">
    <h3>Component 60</h3>
    <button type="button" (click)="increment60()">
      Count {{ count60() }}
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
  export class BenchmarkNg60 {
    count60 = signal(0);

    increment60() {
      this.count60.update((count) => count + 1);
    }
  }