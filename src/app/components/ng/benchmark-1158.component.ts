
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1158',
    template: `<div class="benchmark-component">
    <h3>Component 1158</h3>
    <button type="button" (click)="increment1158()">
      Count {{ count1158() }}
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
  export class BenchmarkNg1158 {
    count1158 = signal(0);

    increment1158() {
      this.count1158.update((count) => count + 1);
    }
  }