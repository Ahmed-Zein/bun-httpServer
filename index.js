const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === '/sayHello') {
            return new Response("Hello there!");
        }
        if (url.pathname === '/404') {
            throw new Error('Whoops!!')
        }
        return new Response("Welcome to Bun!");
    },
    error(error) {
        return new Response(`<pre>${error}\n${error.stack}</pre>`, {
            headers: {
                "Content-Type": "text/html",
            },
        })
    }
});

console.log(`Listening on localhost: ${server.port}`);
