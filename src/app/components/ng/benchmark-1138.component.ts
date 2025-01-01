
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1138',
    template: `<div class="benchmark-component">
    <h3>Component 1138</h3>
    <button type="button" (click)="increment1138()">
      Count {{ count1138() }}
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
  export class BenchmarkNg1138 {
    count1138 = signal(0);

    increment1138() {
      this.count1138.update((count) => count + 1);
    }
  }