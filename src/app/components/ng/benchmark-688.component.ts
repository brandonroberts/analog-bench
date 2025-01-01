
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-688',
    template: `<div class="benchmark-component">
    <h3>Component 688</h3>
    <button type="button" (click)="increment688()">
      Count {{ count688() }}
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
  export class BenchmarkNg688 {
    count688 = signal(0);

    increment688() {
      this.count688.update((count) => count + 1);
    }
  }