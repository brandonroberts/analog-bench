
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-408',
    template: `<div class="benchmark-component">
    <h3>Component 408</h3>
    <button type="button" (click)="increment408()">
      Count {{ count408() }}
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
  export class BenchmarkNg408 {
    count408 = signal(0);

    increment408() {
      this.count408.update((count) => count + 1);
    }
  }