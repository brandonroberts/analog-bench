
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-887',
    template: `<div class="benchmark-component">
    <h3>Component 887</h3>
    <button type="button" (click)="increment887()">
      Count {{ count887() }}
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
  export class BenchmarkNg887 {
    count887 = signal(0);

    increment887() {
      this.count887.update((count) => count + 1);
    }
  }