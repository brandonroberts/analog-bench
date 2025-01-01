
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1238',
    template: `<div class="benchmark-component">
    <h3>Component 1238</h3>
    <button type="button" (click)="increment1238()">
      Count {{ count1238() }}
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
  export class BenchmarkNg1238 {
    count1238 = signal(0);

    increment1238() {
      this.count1238.update((count) => count + 1);
    }
  }