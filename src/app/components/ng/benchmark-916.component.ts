
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-916',
    template: `<div class="benchmark-component">
    <h3>Component 916</h3>
    <button type="button" (click)="increment916()">
      Count {{ count916() }}
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
  export class BenchmarkNg916 {
    count916 = signal(0);

    increment916() {
      this.count916.update((count) => count + 1);
    }
  }