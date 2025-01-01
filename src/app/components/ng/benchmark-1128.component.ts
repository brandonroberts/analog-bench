
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1128',
    template: `<div class="benchmark-component">
    <h3>Component 1128</h3>
    <button type="button" (click)="increment1128()">
      Count {{ count1128() }}
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
  export class BenchmarkNg1128 {
    count1128 = signal(0);

    increment1128() {
      this.count1128.update((count) => count + 1);
    }
  }