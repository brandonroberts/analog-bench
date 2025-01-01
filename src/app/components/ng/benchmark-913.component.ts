
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-913',
    template: `<div class="benchmark-component">
    <h3>Component 913</h3>
    <button type="button" (click)="increment913()">
      Count {{ count913() }}
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
  export class BenchmarkNg913 {
    count913 = signal(0);

    increment913() {
      this.count913.update((count) => count + 1);
    }
  }