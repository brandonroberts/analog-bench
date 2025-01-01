
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-32',
    template: `<div class="benchmark-component">
    <h3>Component 32</h3>
    <button type="button" (click)="increment32()">
      Count {{ count32() }}
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
  export class BenchmarkNg32 {
    count32 = signal(0);

    increment32() {
      this.count32.update((count) => count + 1);
    }
  }