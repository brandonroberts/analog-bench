
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-188',
    template: `<div class="benchmark-component">
    <h3>Component 188</h3>
    <button type="button" (click)="increment188()">
      Count {{ count188() }}
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
  export class BenchmarkNg188 {
    count188 = signal(0);

    increment188() {
      this.count188.update((count) => count + 1);
    }
  }