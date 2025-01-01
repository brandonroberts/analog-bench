
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1337',
    template: `<div class="benchmark-component">
    <h3>Component 1337</h3>
    <button type="button" (click)="increment1337()">
      Count {{ count1337() }}
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
  export class BenchmarkNg1337 {
    count1337 = signal(0);

    increment1337() {
      this.count1337.update((count) => count + 1);
    }
  }