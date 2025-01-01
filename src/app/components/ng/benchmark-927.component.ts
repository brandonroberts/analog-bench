
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-927',
    template: `<div class="benchmark-component">
    <h3>Component 927</h3>
    <button type="button" (click)="increment927()">
      Count {{ count927() }}
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
  export class BenchmarkNg927 {
    count927 = signal(0);

    increment927() {
      this.count927.update((count) => count + 1);
    }
  }