
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-986',
    template: `<div class="benchmark-component">
    <h3>Component 986</h3>
    <button type="button" (click)="increment986()">
      Count {{ count986() }}
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
  export class BenchmarkNg986 {
    count986 = signal(0);

    increment986() {
      this.count986.update((count) => count + 1);
    }
  }