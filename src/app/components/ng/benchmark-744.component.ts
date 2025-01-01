
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-744',
    template: `<div class="benchmark-component">
    <h3>Component 744</h3>
    <button type="button" (click)="increment744()">
      Count {{ count744() }}
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
  export class BenchmarkNg744 {
    count744 = signal(0);

    increment744() {
      this.count744.update((count) => count + 1);
    }
  }