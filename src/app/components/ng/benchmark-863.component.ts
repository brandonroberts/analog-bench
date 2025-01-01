
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-863',
    template: `<div class="benchmark-component">
    <h3>Component 863</h3>
    <button type="button" (click)="increment863()">
      Count {{ count863() }}
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
  export class BenchmarkNg863 {
    count863 = signal(0);

    increment863() {
      this.count863.update((count) => count + 1);
    }
  }