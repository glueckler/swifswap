let url = ''
if (process.env.NODE_ENV === 'production') {
   url = process.env.BASE_URL
} else {
   url = 'http://localhost:3000/'
}

export const apiHost = url