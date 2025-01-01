
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-296',
    template: `<div class="benchmark-component">
    <h3>Component 296</h3>
    <button type="button" (click)="increment296()">
      Count {{ count296() }}
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
  export class BenchmarkNg296 {
    count296 = signal(0);

    increment296() {
      this.count296.update((count) => count + 1);
    }
  }