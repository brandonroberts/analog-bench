
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-794',
    template: `<div class="benchmark-component">
    <h3>Component 794</h3>
    <button type="button" (click)="increment794()">
      Count {{ count794() }}
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
  export class BenchmarkNg794 {
    count794 = signal(0);

    increment794() {
      this.count794.update((count) => count + 1);
    }
  }