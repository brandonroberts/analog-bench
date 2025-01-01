
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1059',
    template: `<div class="benchmark-component">
    <h3>Component 1059</h3>
    <button type="button" (click)="increment1059()">
      Count {{ count1059() }}
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
  export class BenchmarkNg1059 {
    count1059 = signal(0);

    increment1059() {
      this.count1059.update((count) => count + 1);
    }
  }