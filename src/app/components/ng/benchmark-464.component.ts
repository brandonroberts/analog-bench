
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-464',
    template: `<div class="benchmark-component">
    <h3>Component 464</h3>
    <button type="button" (click)="increment464()">
      Count {{ count464() }}
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
  export class BenchmarkNg464 {
    count464 = signal(0);

    increment464() {
      this.count464.update((count) => count + 1);
    }
  }