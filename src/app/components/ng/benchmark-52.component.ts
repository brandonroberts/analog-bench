
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-52',
    template: `<div class="benchmark-component">
    <h3>Component 52</h3>
    <button type="button" (click)="increment52()">
      Count {{ count52() }}
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
  export class BenchmarkNg52 {
    count52 = signal(0);

    increment52() {
      this.count52.update((count) => count + 1);
    }
  }