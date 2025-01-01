
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-618',
    template: `<div class="benchmark-component">
    <h3>Component 618</h3>
    <button type="button" (click)="increment618()">
      Count {{ count618() }}
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
  export class BenchmarkNg618 {
    count618 = signal(0);

    increment618() {
      this.count618.update((count) => count + 1);
    }
  }