let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = 'http://165.227.47.135/'
} else {
   baseUrl = 'http://localhost:3000/'
}

export const apiHost = baseUrl