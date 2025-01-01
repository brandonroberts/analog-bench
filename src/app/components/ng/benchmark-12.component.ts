
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-12',
    template: `<div class="benchmark-component">
    <h3>Component 12</h3>
    <button type="button" (click)="increment12()">
      Count {{ count12() }}
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
  export class BenchmarkNg12 {
    count12 = signal(0);

    increment12() {
      this.count12.update((count) => count + 1);
    }
  }