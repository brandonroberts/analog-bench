
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-59',
    template: `<div class="benchmark-component">
    <h3>Component 59</h3>
    <button type="button" (click)="increment59()">
      Count {{ count59() }}
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
  export class BenchmarkNg59 {
    count59 = signal(0);

    increment59() {
      this.count59.update((count) => count + 1);
    }
  }