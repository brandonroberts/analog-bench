
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-847',
    template: `<div class="benchmark-component">
    <h3>Component 847</h3>
    <button type="button" (click)="increment847()">
      Count {{ count847() }}
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
  export class BenchmarkNg847 {
    count847 = signal(0);

    increment847() {
      this.count847.update((count) => count + 1);
    }
  }