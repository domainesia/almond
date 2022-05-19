### Anonymous `define()` Inside Script File
If file loaded through a script element into a web page and inside it a `define()` call with this signature found,

```typescript
define(factory: Function);
```

Then, will be considered as "anonymous definition". In order for this definition to be stored, we need a name. That's where `anonIdGenerator` is needed. But, by default, the name will be captured from `<script />`'s source.