
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1321',
    template: `<div class="benchmark-component">
    <h3>Component 1321</h3>
    <button type="button" (click)="increment1321()">
      Count {{ count1321() }}
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
  export class BenchmarkNg1321 {
    count1321 = signal(0);

    increment1321() {
      this.count1321.update((count) => count + 1);
    }
  }