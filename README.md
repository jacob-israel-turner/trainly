# trainly

Trainly is a mock service to manage train line schedules.  It is an Apollo GraphQL API written in Node.js.

In order to run Trainly:
1. Install Node.js and Yarn. The code was written and tested in Node `v16.5.0`, but I anticipate `v12.x` or higher would work. Yarn `v1.x` is required.
2. Clone and CD into project: `git clone git@github.com:jacob-israel-turner/trainly.git && cd trainly`
3. Install dependencies: `yarn`
4. Start the server: `yarn start`
5. Open the project at `http://localhost:9001/`.  There will be a link there to use Apollo Studio's sandbox explorer (which is what I recommend using), but you can use any GraphQL GUI or hit the API directly.
