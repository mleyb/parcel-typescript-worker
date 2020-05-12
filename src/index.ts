addEventListener('fetch', (event: any) => {
    event.respondWith(handleRequest(event.request))
})
  
  async function handleRequest(request: Request) {
  }