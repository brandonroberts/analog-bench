
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-971',
    template: `<div class="benchmark-component">
    <h3>Component 971</h3>
    <button type="button" (click)="increment971()">
      Count {{ count971() }}
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
  export class BenchmarkNg971 {
    count971 = signal(0);

    increment971() {
      this.count971.update((count) => count + 1);
    }
  }