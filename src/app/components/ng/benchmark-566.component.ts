
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-566',
    template: `<div class="benchmark-component">
    <h3>Component 566</h3>
    <button type="button" (click)="increment566()">
      Count {{ count566() }}
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
  export class BenchmarkNg566 {
    count566 = signal(0);

    increment566() {
      this.count566.update((count) => count + 1);
    }
  }