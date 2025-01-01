
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-702',
    template: `<div class="benchmark-component">
    <h3>Component 702</h3>
    <button type="button" (click)="increment702()">
      Count {{ count702() }}
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
  export class BenchmarkNg702 {
    count702 = signal(0);

    increment702() {
      this.count702.update((count) => count + 1);
    }
  }