
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-524',
    template: `<div class="benchmark-component">
    <h3>Component 524</h3>
    <button type="button" (click)="increment524()">
      Count {{ count524() }}
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
  export class BenchmarkNg524 {
    count524 = signal(0);

    increment524() {
      this.count524.update((count) => count + 1);
    }
  }