
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1317',
    template: `<div class="benchmark-component">
    <h3>Component 1317</h3>
    <button type="button" (click)="increment1317()">
      Count {{ count1317() }}
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
  export class BenchmarkNg1317 {
    count1317 = signal(0);

    increment1317() {
      this.count1317.update((count) => count + 1);
    }
  }