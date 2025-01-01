
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-904',
    template: `<div class="benchmark-component">
    <h3>Component 904</h3>
    <button type="button" (click)="increment904()">
      Count {{ count904() }}
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
  export class BenchmarkNg904 {
    count904 = signal(0);

    increment904() {
      this.count904.update((count) => count + 1);
    }
  }