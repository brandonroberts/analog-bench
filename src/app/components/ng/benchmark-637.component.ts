
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-637',
    template: `<div class="benchmark-component">
    <h3>Component 637</h3>
    <button type="button" (click)="increment637()">
      Count {{ count637() }}
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
  export class BenchmarkNg637 {
    count637 = signal(0);

    increment637() {
      this.count637.update((count) => count + 1);
    }
  }