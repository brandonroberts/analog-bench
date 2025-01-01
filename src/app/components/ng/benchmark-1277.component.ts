
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1277',
    template: `<div class="benchmark-component">
    <h3>Component 1277</h3>
    <button type="button" (click)="increment1277()">
      Count {{ count1277() }}
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
  export class BenchmarkNg1277 {
    count1277 = signal(0);

    increment1277() {
      this.count1277.update((count) => count + 1);
    }
  }