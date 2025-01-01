
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-19',
    template: `<div class="benchmark-component">
    <h3>Component 19</h3>
    <button type="button" (click)="increment19()">
      Count {{ count19() }}
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
  export class BenchmarkNg19 {
    count19 = signal(0);

    increment19() {
      this.count19.update((count) => count + 1);
    }
  }