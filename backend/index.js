const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        'project': 'Be The Hero',
        'author': 'Jederson'
    })
})

app.listen(3333)

console.log('Listen on 3333')