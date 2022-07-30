const dotenv = require('dotenv'); /* eslint @typescript-eslint/no-var-requires: "off" */
import app from './rest/app';

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
