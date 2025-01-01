
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-93',
    template: `<div class="benchmark-component">
    <h3>Component 93</h3>
    <button type="button" (click)="increment93()">
      Count {{ count93() }}
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
  export class BenchmarkNg93 {
    count93 = signal(0);

    increment93() {
      this.count93.update((count) => count + 1);
    }
  }