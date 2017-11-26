let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = 'set-production-url'
} else {
   baseUrl = 'http://localhost:3000'
}

export const apiHost = baseUrl