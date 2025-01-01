
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-682',
    template: `<div class="benchmark-component">
    <h3>Component 682</h3>
    <button type="button" (click)="increment682()">
      Count {{ count682() }}
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
  export class BenchmarkNg682 {
    count682 = signal(0);

    increment682() {
      this.count682.update((count) => count + 1);
    }
  }