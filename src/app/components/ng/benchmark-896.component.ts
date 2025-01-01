
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-896',
    template: `<div class="benchmark-component">
    <h3>Component 896</h3>
    <button type="button" (click)="increment896()">
      Count {{ count896() }}
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
  export class BenchmarkNg896 {
    count896 = signal(0);

    increment896() {
      this.count896.update((count) => count + 1);
    }
  }