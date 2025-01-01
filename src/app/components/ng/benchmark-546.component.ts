
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-546',
    template: `<div class="benchmark-component">
    <h3>Component 546</h3>
    <button type="button" (click)="increment546()">
      Count {{ count546() }}
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
  export class BenchmarkNg546 {
    count546 = signal(0);

    increment546() {
      this.count546.update((count) => count + 1);
    }
  }