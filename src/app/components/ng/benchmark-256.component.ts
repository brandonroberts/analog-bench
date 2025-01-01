
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-256',
    template: `<div class="benchmark-component">
    <h3>Component 256</h3>
    <button type="button" (click)="increment256()">
      Count {{ count256() }}
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
  export class BenchmarkNg256 {
    count256 = signal(0);

    increment256() {
      this.count256.update((count) => count + 1);
    }
  }