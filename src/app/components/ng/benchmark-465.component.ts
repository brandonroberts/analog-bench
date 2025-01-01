
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-465',
    template: `<div class="benchmark-component">
    <h3>Component 465</h3>
    <button type="button" (click)="increment465()">
      Count {{ count465() }}
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
  export class BenchmarkNg465 {
    count465 = signal(0);

    increment465() {
      this.count465.update((count) => count + 1);
    }
  }