
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-542',
    template: `<div class="benchmark-component">
    <h3>Component 542</h3>
    <button type="button" (click)="increment542()">
      Count {{ count542() }}
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
  export class BenchmarkNg542 {
    count542 = signal(0);

    increment542() {
      this.count542.update((count) => count + 1);
    }
  }