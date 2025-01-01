
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-958',
    template: `<div class="benchmark-component">
    <h3>Component 958</h3>
    <button type="button" (click)="increment958()">
      Count {{ count958() }}
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
  export class BenchmarkNg958 {
    count958 = signal(0);

    increment958() {
      this.count958.update((count) => count + 1);
    }
  }