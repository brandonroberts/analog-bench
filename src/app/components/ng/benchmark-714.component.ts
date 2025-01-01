
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-714',
    template: `<div class="benchmark-component">
    <h3>Component 714</h3>
    <button type="button" (click)="increment714()">
      Count {{ count714() }}
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
  export class BenchmarkNg714 {
    count714 = signal(0);

    increment714() {
      this.count714.update((count) => count + 1);
    }
  }