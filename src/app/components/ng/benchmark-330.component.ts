
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-330',
    template: `<div class="benchmark-component">
    <h3>Component 330</h3>
    <button type="button" (click)="increment330()">
      Count {{ count330() }}
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
  export class BenchmarkNg330 {
    count330 = signal(0);

    increment330() {
      this.count330.update((count) => count + 1);
    }
  }