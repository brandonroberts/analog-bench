
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1198',
    template: `<div class="benchmark-component">
    <h3>Component 1198</h3>
    <button type="button" (click)="increment1198()">
      Count {{ count1198() }}
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
  export class BenchmarkNg1198 {
    count1198 = signal(0);

    increment1198() {
      this.count1198.update((count) => count + 1);
    }
  }