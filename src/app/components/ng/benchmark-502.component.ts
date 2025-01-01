
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-502',
    template: `<div class="benchmark-component">
    <h3>Component 502</h3>
    <button type="button" (click)="increment502()">
      Count {{ count502() }}
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
  export class BenchmarkNg502 {
    count502 = signal(0);

    increment502() {
      this.count502.update((count) => count + 1);
    }
  }