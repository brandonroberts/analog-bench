
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-388',
    template: `<div class="benchmark-component">
    <h3>Component 388</h3>
    <button type="button" (click)="increment388()">
      Count {{ count388() }}
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
  export class BenchmarkNg388 {
    count388 = signal(0);

    increment388() {
      this.count388.update((count) => count + 1);
    }
  }