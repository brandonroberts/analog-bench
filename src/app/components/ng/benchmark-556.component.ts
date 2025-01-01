
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-556',
    template: `<div class="benchmark-component">
    <h3>Component 556</h3>
    <button type="button" (click)="increment556()">
      Count {{ count556() }}
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
  export class BenchmarkNg556 {
    count556 = signal(0);

    increment556() {
      this.count556.update((count) => count + 1);
    }
  }