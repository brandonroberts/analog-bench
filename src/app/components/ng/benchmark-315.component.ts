
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-315',
    template: `<div class="benchmark-component">
    <h3>Component 315</h3>
    <button type="button" (click)="increment315()">
      Count {{ count315() }}
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
  export class BenchmarkNg315 {
    count315 = signal(0);

    increment315() {
      this.count315.update((count) => count + 1);
    }
  }