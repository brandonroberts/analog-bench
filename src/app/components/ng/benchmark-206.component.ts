
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-206',
    template: `<div class="benchmark-component">
    <h3>Component 206</h3>
    <button type="button" (click)="increment206()">
      Count {{ count206() }}
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
  export class BenchmarkNg206 {
    count206 = signal(0);

    increment206() {
      this.count206.update((count) => count + 1);
    }
  }