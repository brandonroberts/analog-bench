
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-248',
    template: `<div class="benchmark-component">
    <h3>Component 248</h3>
    <button type="button" (click)="increment248()">
      Count {{ count248() }}
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
  export class BenchmarkNg248 {
    count248 = signal(0);

    increment248() {
      this.count248.update((count) => count + 1);
    }
  }