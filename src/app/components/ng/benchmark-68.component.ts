
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-68',
    template: `<div class="benchmark-component">
    <h3>Component 68</h3>
    <button type="button" (click)="increment68()">
      Count {{ count68() }}
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
  export class BenchmarkNg68 {
    count68 = signal(0);

    increment68() {
      this.count68.update((count) => count + 1);
    }
  }