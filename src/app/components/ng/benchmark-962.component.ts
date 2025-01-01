
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-962',
    template: `<div class="benchmark-component">
    <h3>Component 962</h3>
    <button type="button" (click)="increment962()">
      Count {{ count962() }}
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
  export class BenchmarkNg962 {
    count962 = signal(0);

    increment962() {
      this.count962.update((count) => count + 1);
    }
  }