
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-258',
    template: `<div class="benchmark-component">
    <h3>Component 258</h3>
    <button type="button" (click)="increment258()">
      Count {{ count258() }}
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
  export class BenchmarkNg258 {
    count258 = signal(0);

    increment258() {
      this.count258.update((count) => count + 1);
    }
  }