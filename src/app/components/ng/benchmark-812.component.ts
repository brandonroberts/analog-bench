
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-812',
    template: `<div class="benchmark-component">
    <h3>Component 812</h3>
    <button type="button" (click)="increment812()">
      Count {{ count812() }}
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
  export class BenchmarkNg812 {
    count812 = signal(0);

    increment812() {
      this.count812.update((count) => count + 1);
    }
  }