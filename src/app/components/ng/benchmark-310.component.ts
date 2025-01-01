
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-310',
    template: `<div class="benchmark-component">
    <h3>Component 310</h3>
    <button type="button" (click)="increment310()">
      Count {{ count310() }}
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
  export class BenchmarkNg310 {
    count310 = signal(0);

    increment310() {
      this.count310.update((count) => count + 1);
    }
  }