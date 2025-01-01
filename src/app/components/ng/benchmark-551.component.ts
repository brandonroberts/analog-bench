
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-551',
    template: `<div class="benchmark-component">
    <h3>Component 551</h3>
    <button type="button" (click)="increment551()">
      Count {{ count551() }}
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
  export class BenchmarkNg551 {
    count551 = signal(0);

    increment551() {
      this.count551.update((count) => count + 1);
    }
  }