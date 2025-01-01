
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-557',
    template: `<div class="benchmark-component">
    <h3>Component 557</h3>
    <button type="button" (click)="increment557()">
      Count {{ count557() }}
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
  export class BenchmarkNg557 {
    count557 = signal(0);

    increment557() {
      this.count557.update((count) => count + 1);
    }
  }