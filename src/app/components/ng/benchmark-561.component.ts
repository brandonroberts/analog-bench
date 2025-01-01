
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-561',
    template: `<div class="benchmark-component">
    <h3>Component 561</h3>
    <button type="button" (click)="increment561()">
      Count {{ count561() }}
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
  export class BenchmarkNg561 {
    count561 = signal(0);

    increment561() {
      this.count561.update((count) => count + 1);
    }
  }