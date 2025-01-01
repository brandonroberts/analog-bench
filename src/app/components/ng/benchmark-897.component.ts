
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-897',
    template: `<div class="benchmark-component">
    <h3>Component 897</h3>
    <button type="button" (click)="increment897()">
      Count {{ count897() }}
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
  export class BenchmarkNg897 {
    count897 = signal(0);

    increment897() {
      this.count897.update((count) => count + 1);
    }
  }