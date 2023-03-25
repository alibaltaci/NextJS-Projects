const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) =>  {

    // geliştirme aşamasında olup olmadığmızı kontrol edip ona uygun verileri döndürüyoruz.

    if( phase === PHASE_DEVELOPMENT_SERVER ){

        // geliştirme aşaması için
        return{
            env:{
                mongodb_username: 'ali',
                mongodb_password: '5RfnGEhePap6ULAM',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-blog-dev' //farkı bir isim kullandık
            }
        }
    }
    
    // canlıda 
    return{
        env:{
            mongodb_username: 'ali',
            mongodb_password: '5RfnGEhePap6ULAM',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-blog'
        }
    }
}