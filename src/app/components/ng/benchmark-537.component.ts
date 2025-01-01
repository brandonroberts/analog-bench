
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-537',
    template: `<div class="benchmark-component">
    <h3>Component 537</h3>
    <button type="button" (click)="increment537()">
      Count {{ count537() }}
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
  export class BenchmarkNg537 {
    count537 = signal(0);

    increment537() {
      this.count537.update((count) => count + 1);
    }
  }