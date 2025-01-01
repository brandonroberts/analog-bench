
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-828',
    template: `<div class="benchmark-component">
    <h3>Component 828</h3>
    <button type="button" (click)="increment828()">
      Count {{ count828() }}
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
  export class BenchmarkNg828 {
    count828 = signal(0);

    increment828() {
      this.count828.update((count) => count + 1);
    }
  }