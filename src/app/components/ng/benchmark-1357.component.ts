
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1357',
    template: `<div class="benchmark-component">
    <h3>Component 1357</h3>
    <button type="button" (click)="increment1357()">
      Count {{ count1357() }}
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
  export class BenchmarkNg1357 {
    count1357 = signal(0);

    increment1357() {
      this.count1357.update((count) => count + 1);
    }
  }