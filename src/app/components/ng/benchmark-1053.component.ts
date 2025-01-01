
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1053',
    template: `<div class="benchmark-component">
    <h3>Component 1053</h3>
    <button type="button" (click)="increment1053()">
      Count {{ count1053() }}
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
  export class BenchmarkNg1053 {
    count1053 = signal(0);

    increment1053() {
      this.count1053.update((count) => count + 1);
    }
  }