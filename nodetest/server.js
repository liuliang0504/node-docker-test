const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )

const server = ronin.server()

server.use( '/', mocks.server( server.Router(), false, true ) )
// 启动服务
server.start()
