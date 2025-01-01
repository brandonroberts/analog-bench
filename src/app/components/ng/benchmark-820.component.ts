
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-820',
    template: `<div class="benchmark-component">
    <h3>Component 820</h3>
    <button type="button" (click)="increment820()">
      Count {{ count820() }}
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
  export class BenchmarkNg820 {
    count820 = signal(0);

    increment820() {
      this.count820.update((count) => count + 1);
    }
  }