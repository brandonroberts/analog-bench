
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1056',
    template: `<div class="benchmark-component">
    <h3>Component 1056</h3>
    <button type="button" (click)="increment1056()">
      Count {{ count1056() }}
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
  export class BenchmarkNg1056 {
    count1056 = signal(0);

    increment1056() {
      this.count1056.update((count) => count + 1);
    }
  }