
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-260',
    template: `<div class="benchmark-component">
    <h3>Component 260</h3>
    <button type="button" (click)="increment260()">
      Count {{ count260() }}
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
  export class BenchmarkNg260 {
    count260 = signal(0);

    increment260() {
      this.count260.update((count) => count + 1);
    }
  }