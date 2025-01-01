
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-599',
    template: `<div class="benchmark-component">
    <h3>Component 599</h3>
    <button type="button" (click)="increment599()">
      Count {{ count599() }}
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
  export class BenchmarkNg599 {
    count599 = signal(0);

    increment599() {
      this.count599.update((count) => count + 1);
    }
  }