
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-898',
    template: `<div class="benchmark-component">
    <h3>Component 898</h3>
    <button type="button" (click)="increment898()">
      Count {{ count898() }}
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
  export class BenchmarkNg898 {
    count898 = signal(0);

    increment898() {
      this.count898.update((count) => count + 1);
    }
  }