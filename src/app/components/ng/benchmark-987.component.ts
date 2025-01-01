
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-987',
    template: `<div class="benchmark-component">
    <h3>Component 987</h3>
    <button type="button" (click)="increment987()">
      Count {{ count987() }}
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
  export class BenchmarkNg987 {
    count987 = signal(0);

    increment987() {
      this.count987.update((count) => count + 1);
    }
  }