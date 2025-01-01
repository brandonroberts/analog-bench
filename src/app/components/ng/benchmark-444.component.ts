
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-444',
    template: `<div class="benchmark-component">
    <h3>Component 444</h3>
    <button type="button" (click)="increment444()">
      Count {{ count444() }}
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
  export class BenchmarkNg444 {
    count444 = signal(0);

    increment444() {
      this.count444.update((count) => count + 1);
    }
  }