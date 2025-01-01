import * as fs from 'fs';
import * as path from 'path';

// Create components directory if it doesn't exist
const componentsDir = path.join(
  process.cwd(),
  'src',
  'app',
  'components',
  'ag'
);
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const total = 1001;
// Generate {n} components
for (let i = 1; i <= total; i++) {
  const componentContent = `<script lang="ts">
  import { signal } from '@angular/core';

  const count${i} = signal(0);

  function increment${i}() {
    count${i}.update((count) => count + 1);
  }
</script>

<template>
  <div class="benchmark-component">
    <h3>Component ${i}</h3>
    <button type="button" (click)="increment${i}()">
      Count {{ count${i}() }}
    </button>
  </div>
</template>

<style>
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
</style>
`;

  fs.writeFileSync(
    path.join(componentsDir, `benchmark-ag-${i}.ag`),
    componentContent
  );
}

// Create a new index page that uses all components
const pageContent = `<script lang="ts">
${Array.from({ length: total }, (_, i) => i + 1)
    .map(
      (i) => `import BenchmarkAg${i} from '../components/ag/benchmark-ag-${i}.ag'`
    )
    .join(';\n')};

  defineMetadata({
  imports: [
    ${Array.from({ length: total }, (_, i) => i + 1)
    .map((i) => `BenchmarkAg${i}`)
    .join(',\n')}
  ]
});
</script>

<template>
  <div class="benchmark-container">
    <h1>Benchmark Page</h1>
    <div class="components-grid">
      ${Array.from({ length: total }, (_, i) => i + 1)
    .map((i) => `<BenchmarkAg${i} />`)
    .join('\n      ')}
    </div>
  </div>
</template>

<style>
  .benchmark-container {
    padding: 2rem;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
</style>
`;

// Create the benchmark page
const pagesDir = path.join(process.cwd(), 'src', 'app', 'pages');
fs.writeFileSync(path.join(pagesDir, 'benchmarkag.page.ag'), pageContent);

console.log(`Generated ${total} benchmark AG components and benchmark page`);
