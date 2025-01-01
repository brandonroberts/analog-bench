
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-74',
    template: `<div class="benchmark-component">
    <h3>Component 74</h3>
    <button type="button" (click)="increment74()">
      Count {{ count74() }}
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
  export class BenchmarkNg74 {
    count74 = signal(0);

    increment74() {
      this.count74.update((count) => count + 1);
    }
  }