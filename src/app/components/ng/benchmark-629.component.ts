
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-629',
    template: `<div class="benchmark-component">
    <h3>Component 629</h3>
    <button type="button" (click)="increment629()">
      Count {{ count629() }}
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
  export class BenchmarkNg629 {
    count629 = signal(0);

    increment629() {
      this.count629.update((count) => count + 1);
    }
  }