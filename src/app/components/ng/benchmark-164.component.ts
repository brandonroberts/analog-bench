
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-164',
    template: `<div class="benchmark-component">
    <h3>Component 164</h3>
    <button type="button" (click)="increment164()">
      Count {{ count164() }}
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
  export class BenchmarkNg164 {
    count164 = signal(0);

    increment164() {
      this.count164.update((count) => count + 1);
    }
  }