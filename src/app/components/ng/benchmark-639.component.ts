
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-639',
    template: `<div class="benchmark-component">
    <h3>Component 639</h3>
    <button type="button" (click)="increment639()">
      Count {{ count639() }}
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
  export class BenchmarkNg639 {
    count639 = signal(0);

    increment639() {
      this.count639.update((count) => count + 1);
    }
  }