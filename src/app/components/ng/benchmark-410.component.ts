
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-410',
    template: `<div class="benchmark-component">
    <h3>Component 410</h3>
    <button type="button" (click)="increment410()">
      Count {{ count410() }}
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
  export class BenchmarkNg410 {
    count410 = signal(0);

    increment410() {
      this.count410.update((count) => count + 1);
    }
  }