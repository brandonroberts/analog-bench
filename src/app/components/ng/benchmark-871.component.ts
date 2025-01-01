
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-871',
    template: `<div class="benchmark-component">
    <h3>Component 871</h3>
    <button type="button" (click)="increment871()">
      Count {{ count871() }}
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
  export class BenchmarkNg871 {
    count871 = signal(0);

    increment871() {
      this.count871.update((count) => count + 1);
    }
  }