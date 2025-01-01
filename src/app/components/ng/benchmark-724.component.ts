
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-724',
    template: `<div class="benchmark-component">
    <h3>Component 724</h3>
    <button type="button" (click)="increment724()">
      Count {{ count724() }}
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
  export class BenchmarkNg724 {
    count724 = signal(0);

    increment724() {
      this.count724.update((count) => count + 1);
    }
  }