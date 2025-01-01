
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-615',
    template: `<div class="benchmark-component">
    <h3>Component 615</h3>
    <button type="button" (click)="increment615()">
      Count {{ count615() }}
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
  export class BenchmarkNg615 {
    count615 = signal(0);

    increment615() {
      this.count615.update((count) => count + 1);
    }
  }