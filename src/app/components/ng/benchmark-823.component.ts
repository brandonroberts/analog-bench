
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-823',
    template: `<div class="benchmark-component">
    <h3>Component 823</h3>
    <button type="button" (click)="increment823()">
      Count {{ count823() }}
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
  export class BenchmarkNg823 {
    count823 = signal(0);

    increment823() {
      this.count823.update((count) => count + 1);
    }
  }