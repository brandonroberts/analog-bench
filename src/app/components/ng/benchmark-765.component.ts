
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-765',
    template: `<div class="benchmark-component">
    <h3>Component 765</h3>
    <button type="button" (click)="increment765()">
      Count {{ count765() }}
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
  export class BenchmarkNg765 {
    count765 = signal(0);

    increment765() {
      this.count765.update((count) => count + 1);
    }
  }