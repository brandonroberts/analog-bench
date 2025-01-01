
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-86',
    template: `<div class="benchmark-component">
    <h3>Component 86</h3>
    <button type="button" (click)="increment86()">
      Count {{ count86() }}
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
  export class BenchmarkNg86 {
    count86 = signal(0);

    increment86() {
      this.count86.update((count) => count + 1);
    }
  }