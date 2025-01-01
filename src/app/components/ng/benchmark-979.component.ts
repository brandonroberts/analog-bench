
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-979',
    template: `<div class="benchmark-component">
    <h3>Component 979</h3>
    <button type="button" (click)="increment979()">
      Count {{ count979() }}
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
  export class BenchmarkNg979 {
    count979 = signal(0);

    increment979() {
      this.count979.update((count) => count + 1);
    }
  }