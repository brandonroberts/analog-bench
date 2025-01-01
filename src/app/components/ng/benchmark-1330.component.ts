
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1330',
    template: `<div class="benchmark-component">
    <h3>Component 1330</h3>
    <button type="button" (click)="increment1330()">
      Count {{ count1330() }}
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
  export class BenchmarkNg1330 {
    count1330 = signal(0);

    increment1330() {
      this.count1330.update((count) => count + 1);
    }
  }