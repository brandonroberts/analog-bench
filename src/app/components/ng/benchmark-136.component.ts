
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-136',
    template: `<div class="benchmark-component">
    <h3>Component 136</h3>
    <button type="button" (click)="increment136()">
      Count {{ count136() }}
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
  export class BenchmarkNg136 {
    count136 = signal(0);

    increment136() {
      this.count136.update((count) => count + 1);
    }
  }