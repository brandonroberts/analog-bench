
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-445',
    template: `<div class="benchmark-component">
    <h3>Component 445</h3>
    <button type="button" (click)="increment445()">
      Count {{ count445() }}
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
  export class BenchmarkNg445 {
    count445 = signal(0);

    increment445() {
      this.count445.update((count) => count + 1);
    }
  }