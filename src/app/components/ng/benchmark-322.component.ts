
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-322',
    template: `<div class="benchmark-component">
    <h3>Component 322</h3>
    <button type="button" (click)="increment322()">
      Count {{ count322() }}
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
  export class BenchmarkNg322 {
    count322 = signal(0);

    increment322() {
      this.count322.update((count) => count + 1);
    }
  }