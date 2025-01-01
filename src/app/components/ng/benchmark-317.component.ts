
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-317',
    template: `<div class="benchmark-component">
    <h3>Component 317</h3>
    <button type="button" (click)="increment317()">
      Count {{ count317() }}
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
  export class BenchmarkNg317 {
    count317 = signal(0);

    increment317() {
      this.count317.update((count) => count + 1);
    }
  }