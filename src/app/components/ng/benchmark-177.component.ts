
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-177',
    template: `<div class="benchmark-component">
    <h3>Component 177</h3>
    <button type="button" (click)="increment177()">
      Count {{ count177() }}
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
  export class BenchmarkNg177 {
    count177 = signal(0);

    increment177() {
      this.count177.update((count) => count + 1);
    }
  }