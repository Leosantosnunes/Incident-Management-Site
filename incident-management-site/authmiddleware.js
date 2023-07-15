const jwt = require('jsonwebtoken');
const APP_SECRET = 'Secret';
const USERNAME = 'admin';
const PASSWORD = '';
const mappings = 
{
    get : ['/api/orders', '/orders'],
    post: ['/api/movies-list']
}

function requiresAuth(method,url){
    return (mappings[method.toLowerCase()])
}