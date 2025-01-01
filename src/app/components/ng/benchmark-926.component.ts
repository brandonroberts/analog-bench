
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-926',
    template: `<div class="benchmark-component">
    <h3>Component 926</h3>
    <button type="button" (click)="increment926()">
      Count {{ count926() }}
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
  export class BenchmarkNg926 {
    count926 = signal(0);

    increment926() {
      this.count926.update((count) => count + 1);
    }
  }