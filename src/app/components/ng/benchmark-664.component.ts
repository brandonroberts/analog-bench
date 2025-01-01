
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-664',
    template: `<div class="benchmark-component">
    <h3>Component 664</h3>
    <button type="button" (click)="increment664()">
      Count {{ count664() }}
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
  export class BenchmarkNg664 {
    count664 = signal(0);

    increment664() {
      this.count664.update((count) => count + 1);
    }
  }