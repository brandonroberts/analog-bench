
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1170',
    template: `<div class="benchmark-component">
    <h3>Component 1170</h3>
    <button type="button" (click)="increment1170()">
      Count {{ count1170() }}
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
  export class BenchmarkNg1170 {
    count1170 = signal(0);

    increment1170() {
      this.count1170.update((count) => count + 1);
    }
  }