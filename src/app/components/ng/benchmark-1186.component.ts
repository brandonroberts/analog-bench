
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1186',
    template: `<div class="benchmark-component">
    <h3>Component 1186</h3>
    <button type="button" (click)="increment1186()">
      Count {{ count1186() }}
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
  export class BenchmarkNg1186 {
    count1186 = signal(0);

    increment1186() {
      this.count1186.update((count) => count + 1);
    }
  }