
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1153',
    template: `<div class="benchmark-component">
    <h3>Component 1153</h3>
    <button type="button" (click)="increment1153()">
      Count {{ count1153() }}
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
  export class BenchmarkNg1153 {
    count1153 = signal(0);

    increment1153() {
      this.count1153.update((count) => count + 1);
    }
  }