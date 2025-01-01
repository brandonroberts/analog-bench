
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-448',
    template: `<div class="benchmark-component">
    <h3>Component 448</h3>
    <button type="button" (click)="increment448()">
      Count {{ count448() }}
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
  export class BenchmarkNg448 {
    count448 = signal(0);

    increment448() {
      this.count448.update((count) => count + 1);
    }
  }