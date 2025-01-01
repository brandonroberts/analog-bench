
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-755',
    template: `<div class="benchmark-component">
    <h3>Component 755</h3>
    <button type="button" (click)="increment755()">
      Count {{ count755() }}
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
  export class BenchmarkNg755 {
    count755 = signal(0);

    increment755() {
      this.count755.update((count) => count + 1);
    }
  }