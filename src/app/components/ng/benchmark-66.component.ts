
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-66',
    template: `<div class="benchmark-component">
    <h3>Component 66</h3>
    <button type="button" (click)="increment66()">
      Count {{ count66() }}
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
  export class BenchmarkNg66 {
    count66 = signal(0);

    increment66() {
      this.count66.update((count) => count + 1);
    }
  }