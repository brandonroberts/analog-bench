
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-415',
    template: `<div class="benchmark-component">
    <h3>Component 415</h3>
    <button type="button" (click)="increment415()">
      Count {{ count415() }}
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
  export class BenchmarkNg415 {
    count415 = signal(0);

    increment415() {
      this.count415.update((count) => count + 1);
    }
  }