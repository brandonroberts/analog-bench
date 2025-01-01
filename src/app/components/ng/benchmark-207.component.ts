
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-207',
    template: `<div class="benchmark-component">
    <h3>Component 207</h3>
    <button type="button" (click)="increment207()">
      Count {{ count207() }}
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
  export class BenchmarkNg207 {
    count207 = signal(0);

    increment207() {
      this.count207.update((count) => count + 1);
    }
  }