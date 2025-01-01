
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1103',
    template: `<div class="benchmark-component">
    <h3>Component 1103</h3>
    <button type="button" (click)="increment1103()">
      Count {{ count1103() }}
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
  export class BenchmarkNg1103 {
    count1103 = signal(0);

    increment1103() {
      this.count1103.update((count) => count + 1);
    }
  }