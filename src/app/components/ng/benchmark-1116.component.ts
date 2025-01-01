
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1116',
    template: `<div class="benchmark-component">
    <h3>Component 1116</h3>
    <button type="button" (click)="increment1116()">
      Count {{ count1116() }}
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
  export class BenchmarkNg1116 {
    count1116 = signal(0);

    increment1116() {
      this.count1116.update((count) => count + 1);
    }
  }