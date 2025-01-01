
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-116',
    template: `<div class="benchmark-component">
    <h3>Component 116</h3>
    <button type="button" (click)="increment116()">
      Count {{ count116() }}
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
  export class BenchmarkNg116 {
    count116 = signal(0);

    increment116() {
      this.count116.update((count) => count + 1);
    }
  }