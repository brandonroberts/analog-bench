
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-945',
    template: `<div class="benchmark-component">
    <h3>Component 945</h3>
    <button type="button" (click)="increment945()">
      Count {{ count945() }}
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
  export class BenchmarkNg945 {
    count945 = signal(0);

    increment945() {
      this.count945.update((count) => count + 1);
    }
  }