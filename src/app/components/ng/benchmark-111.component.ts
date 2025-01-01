
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-111',
    template: `<div class="benchmark-component">
    <h3>Component 111</h3>
    <button type="button" (click)="increment111()">
      Count {{ count111() }}
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
  export class BenchmarkNg111 {
    count111 = signal(0);

    increment111() {
      this.count111.update((count) => count + 1);
    }
  }