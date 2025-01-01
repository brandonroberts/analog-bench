
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-831',
    template: `<div class="benchmark-component">
    <h3>Component 831</h3>
    <button type="button" (click)="increment831()">
      Count {{ count831() }}
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
  export class BenchmarkNg831 {
    count831 = signal(0);

    increment831() {
      this.count831.update((count) => count + 1);
    }
  }