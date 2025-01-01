
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-47',
    template: `<div class="benchmark-component">
    <h3>Component 47</h3>
    <button type="button" (click)="increment47()">
      Count {{ count47() }}
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
  export class BenchmarkNg47 {
    count47 = signal(0);

    increment47() {
      this.count47.update((count) => count + 1);
    }
  }