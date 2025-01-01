
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-961',
    template: `<div class="benchmark-component">
    <h3>Component 961</h3>
    <button type="button" (click)="increment961()">
      Count {{ count961() }}
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
  export class BenchmarkNg961 {
    count961 = signal(0);

    increment961() {
      this.count961.update((count) => count + 1);
    }
  }