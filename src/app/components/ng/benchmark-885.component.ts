
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-885',
    template: `<div class="benchmark-component">
    <h3>Component 885</h3>
    <button type="button" (click)="increment885()">
      Count {{ count885() }}
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
  export class BenchmarkNg885 {
    count885 = signal(0);

    increment885() {
      this.count885.update((count) => count + 1);
    }
  }