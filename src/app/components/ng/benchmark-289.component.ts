
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-289',
    template: `<div class="benchmark-component">
    <h3>Component 289</h3>
    <button type="button" (click)="increment289()">
      Count {{ count289() }}
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
  export class BenchmarkNg289 {
    count289 = signal(0);

    increment289() {
      this.count289.update((count) => count + 1);
    }
  }