
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-158',
    template: `<div class="benchmark-component">
    <h3>Component 158</h3>
    <button type="button" (click)="increment158()">
      Count {{ count158() }}
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
  export class BenchmarkNg158 {
    count158 = signal(0);

    increment158() {
      this.count158.update((count) => count + 1);
    }
  }