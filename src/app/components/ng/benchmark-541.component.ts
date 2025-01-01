
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-541',
    template: `<div class="benchmark-component">
    <h3>Component 541</h3>
    <button type="button" (click)="increment541()">
      Count {{ count541() }}
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
  export class BenchmarkNg541 {
    count541 = signal(0);

    increment541() {
      this.count541.update((count) => count + 1);
    }
  }