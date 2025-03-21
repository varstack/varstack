# @varstack/config

Utility package for resolving varstack configuration file.

```ts
import { parse, resolveConfig } from '@varstack/config';
import type { Config } from '@varstack/config';

const config = resolveConfig(process.cwd(), {});
```
