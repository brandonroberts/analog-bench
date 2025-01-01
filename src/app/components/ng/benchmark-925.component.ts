
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-925',
    template: `<div class="benchmark-component">
    <h3>Component 925</h3>
    <button type="button" (click)="increment925()">
      Count {{ count925() }}
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
  export class BenchmarkNg925 {
    count925 = signal(0);

    increment925() {
      this.count925.update((count) => count + 1);
    }
  }