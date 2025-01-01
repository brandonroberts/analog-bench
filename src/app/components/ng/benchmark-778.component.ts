
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-778',
    template: `<div class="benchmark-component">
    <h3>Component 778</h3>
    <button type="button" (click)="increment778()">
      Count {{ count778() }}
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
  export class BenchmarkNg778 {
    count778 = signal(0);

    increment778() {
      this.count778.update((count) => count + 1);
    }
  }