
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-187',
    template: `<div class="benchmark-component">
    <h3>Component 187</h3>
    <button type="button" (click)="increment187()">
      Count {{ count187() }}
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
  export class BenchmarkNg187 {
    count187 = signal(0);

    increment187() {
      this.count187.update((count) => count + 1);
    }
  }