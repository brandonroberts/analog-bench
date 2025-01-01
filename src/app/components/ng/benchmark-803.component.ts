
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-803',
    template: `<div class="benchmark-component">
    <h3>Component 803</h3>
    <button type="button" (click)="increment803()">
      Count {{ count803() }}
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
  export class BenchmarkNg803 {
    count803 = signal(0);

    increment803() {
      this.count803.update((count) => count + 1);
    }
  }