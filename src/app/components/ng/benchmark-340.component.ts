
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-340',
    template: `<div class="benchmark-component">
    <h3>Component 340</h3>
    <button type="button" (click)="increment340()">
      Count {{ count340() }}
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
  export class BenchmarkNg340 {
    count340 = signal(0);

    increment340() {
      this.count340.update((count) => count + 1);
    }
  }