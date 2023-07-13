

## Install as a package
You can install @aidbox/aidbox-sdk-js via the terminal.

```shell
npm install @aidbox/aidbox-sdk-js
```

## Advanced: Generate from configuration project

```typescript
import { Client } from "aidbox-sdk";

export const aidbox = new Client("<HOST_URL>", {
  username: "<CLIENT_NAME>",
  password: "<CLIENT_SECRET>",
});
```