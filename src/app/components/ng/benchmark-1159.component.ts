
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1159',
    template: `<div class="benchmark-component">
    <h3>Component 1159</h3>
    <button type="button" (click)="increment1159()">
      Count {{ count1159() }}
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
  export class BenchmarkNg1159 {
    count1159 = signal(0);

    increment1159() {
      this.count1159.update((count) => count + 1);
    }
  }