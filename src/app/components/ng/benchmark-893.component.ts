
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-893',
    template: `<div class="benchmark-component">
    <h3>Component 893</h3>
    <button type="button" (click)="increment893()">
      Count {{ count893() }}
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
  export class BenchmarkNg893 {
    count893 = signal(0);

    increment893() {
      this.count893.update((count) => count + 1);
    }
  }