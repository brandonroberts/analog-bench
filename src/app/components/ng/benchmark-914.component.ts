
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-914',
    template: `<div class="benchmark-component">
    <h3>Component 914</h3>
    <button type="button" (click)="increment914()">
      Count {{ count914() }}
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
  export class BenchmarkNg914 {
    count914 = signal(0);

    increment914() {
      this.count914.update((count) => count + 1);
    }
  }