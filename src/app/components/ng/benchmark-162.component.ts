
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-162',
    template: `<div class="benchmark-component">
    <h3>Component 162</h3>
    <button type="button" (click)="increment162()">
      Count {{ count162() }}
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
  export class BenchmarkNg162 {
    count162 = signal(0);

    increment162() {
      this.count162.update((count) => count + 1);
    }
  }