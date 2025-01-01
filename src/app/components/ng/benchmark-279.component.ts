
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-279',
    template: `<div class="benchmark-component">
    <h3>Component 279</h3>
    <button type="button" (click)="increment279()">
      Count {{ count279() }}
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
  export class BenchmarkNg279 {
    count279 = signal(0);

    increment279() {
      this.count279.update((count) => count + 1);
    }
  }