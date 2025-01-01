
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-731',
    template: `<div class="benchmark-component">
    <h3>Component 731</h3>
    <button type="button" (click)="increment731()">
      Count {{ count731() }}
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
  export class BenchmarkNg731 {
    count731 = signal(0);

    increment731() {
      this.count731.update((count) => count + 1);
    }
  }