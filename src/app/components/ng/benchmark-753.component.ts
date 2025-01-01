
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-753',
    template: `<div class="benchmark-component">
    <h3>Component 753</h3>
    <button type="button" (click)="increment753()">
      Count {{ count753() }}
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
  export class BenchmarkNg753 {
    count753 = signal(0);

    increment753() {
      this.count753.update((count) => count + 1);
    }
  }