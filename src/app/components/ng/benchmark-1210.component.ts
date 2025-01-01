
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1210',
    template: `<div class="benchmark-component">
    <h3>Component 1210</h3>
    <button type="button" (click)="increment1210()">
      Count {{ count1210() }}
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
  export class BenchmarkNg1210 {
    count1210 = signal(0);

    increment1210() {
      this.count1210.update((count) => count + 1);
    }
  }