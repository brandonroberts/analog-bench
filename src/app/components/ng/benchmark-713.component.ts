
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-713',
    template: `<div class="benchmark-component">
    <h3>Component 713</h3>
    <button type="button" (click)="increment713()">
      Count {{ count713() }}
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
  export class BenchmarkNg713 {
    count713 = signal(0);

    increment713() {
      this.count713.update((count) => count + 1);
    }
  }