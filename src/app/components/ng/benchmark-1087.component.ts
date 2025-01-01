
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1087',
    template: `<div class="benchmark-component">
    <h3>Component 1087</h3>
    <button type="button" (click)="increment1087()">
      Count {{ count1087() }}
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
  export class BenchmarkNg1087 {
    count1087 = signal(0);

    increment1087() {
      this.count1087.update((count) => count + 1);
    }
  }