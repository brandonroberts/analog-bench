
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-240',
    template: `<div class="benchmark-component">
    <h3>Component 240</h3>
    <button type="button" (click)="increment240()">
      Count {{ count240() }}
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
  export class BenchmarkNg240 {
    count240 = signal(0);

    increment240() {
      this.count240.update((count) => count + 1);
    }
  }