
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-818',
    template: `<div class="benchmark-component">
    <h3>Component 818</h3>
    <button type="button" (click)="increment818()">
      Count {{ count818() }}
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
  export class BenchmarkNg818 {
    count818 = signal(0);

    increment818() {
      this.count818.update((count) => count + 1);
    }
  }