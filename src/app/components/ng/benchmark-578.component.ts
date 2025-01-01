
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-578',
    template: `<div class="benchmark-component">
    <h3>Component 578</h3>
    <button type="button" (click)="increment578()">
      Count {{ count578() }}
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
  export class BenchmarkNg578 {
    count578 = signal(0);

    increment578() {
      this.count578.update((count) => count + 1);
    }
  }