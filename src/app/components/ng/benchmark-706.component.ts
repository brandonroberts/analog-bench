
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-706',
    template: `<div class="benchmark-component">
    <h3>Component 706</h3>
    <button type="button" (click)="increment706()">
      Count {{ count706() }}
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
  export class BenchmarkNg706 {
    count706 = signal(0);

    increment706() {
      this.count706.update((count) => count + 1);
    }
  }