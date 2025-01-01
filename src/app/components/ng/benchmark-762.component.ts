
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-762',
    template: `<div class="benchmark-component">
    <h3>Component 762</h3>
    <button type="button" (click)="increment762()">
      Count {{ count762() }}
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
  export class BenchmarkNg762 {
    count762 = signal(0);

    increment762() {
      this.count762.update((count) => count + 1);
    }
  }