
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1214',
    template: `<div class="benchmark-component">
    <h3>Component 1214</h3>
    <button type="button" (click)="increment1214()">
      Count {{ count1214() }}
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
  export class BenchmarkNg1214 {
    count1214 = signal(0);

    increment1214() {
      this.count1214.update((count) => count + 1);
    }
  }