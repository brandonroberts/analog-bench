
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-573',
    template: `<div class="benchmark-component">
    <h3>Component 573</h3>
    <button type="button" (click)="increment573()">
      Count {{ count573() }}
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
  export class BenchmarkNg573 {
    count573 = signal(0);

    increment573() {
      this.count573.update((count) => count + 1);
    }
  }