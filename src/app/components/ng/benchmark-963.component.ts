
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-963',
    template: `<div class="benchmark-component">
    <h3>Component 963</h3>
    <button type="button" (click)="increment963()">
      Count {{ count963() }}
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
  export class BenchmarkNg963 {
    count963 = signal(0);

    increment963() {
      this.count963.update((count) => count + 1);
    }
  }