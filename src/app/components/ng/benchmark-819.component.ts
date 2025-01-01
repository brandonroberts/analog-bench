
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-819',
    template: `<div class="benchmark-component">
    <h3>Component 819</h3>
    <button type="button" (click)="increment819()">
      Count {{ count819() }}
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
  export class BenchmarkNg819 {
    count819 = signal(0);

    increment819() {
      this.count819.update((count) => count + 1);
    }
  }