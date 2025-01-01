
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1219',
    template: `<div class="benchmark-component">
    <h3>Component 1219</h3>
    <button type="button" (click)="increment1219()">
      Count {{ count1219() }}
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
  export class BenchmarkNg1219 {
    count1219 = signal(0);

    increment1219() {
      this.count1219.update((count) => count + 1);
    }
  }