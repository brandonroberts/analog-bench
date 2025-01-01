
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-418',
    template: `<div class="benchmark-component">
    <h3>Component 418</h3>
    <button type="button" (click)="increment418()">
      Count {{ count418() }}
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
  export class BenchmarkNg418 {
    count418 = signal(0);

    increment418() {
      this.count418.update((count) => count + 1);
    }
  }