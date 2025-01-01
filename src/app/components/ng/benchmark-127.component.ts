
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-127',
    template: `<div class="benchmark-component">
    <h3>Component 127</h3>
    <button type="button" (click)="increment127()">
      Count {{ count127() }}
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
  export class BenchmarkNg127 {
    count127 = signal(0);

    increment127() {
      this.count127.update((count) => count + 1);
    }
  }