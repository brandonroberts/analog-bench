
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-423',
    template: `<div class="benchmark-component">
    <h3>Component 423</h3>
    <button type="button" (click)="increment423()">
      Count {{ count423() }}
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
  export class BenchmarkNg423 {
    count423 = signal(0);

    increment423() {
      this.count423.update((count) => count + 1);
    }
  }