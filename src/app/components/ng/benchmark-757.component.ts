
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-757',
    template: `<div class="benchmark-component">
    <h3>Component 757</h3>
    <button type="button" (click)="increment757()">
      Count {{ count757() }}
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
  export class BenchmarkNg757 {
    count757 = signal(0);

    increment757() {
      this.count757.update((count) => count + 1);
    }
  }