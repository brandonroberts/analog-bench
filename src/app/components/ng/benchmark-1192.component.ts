
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1192',
    template: `<div class="benchmark-component">
    <h3>Component 1192</h3>
    <button type="button" (click)="increment1192()">
      Count {{ count1192() }}
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
  export class BenchmarkNg1192 {
    count1192 = signal(0);

    increment1192() {
      this.count1192.update((count) => count + 1);
    }
  }