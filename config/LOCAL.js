module.exports = {
  DEBUG: true,
  OSSEUS_LOGGER_LOG_LEVEL: 'debug',
  OSSEUS_LOGGER_NO_CONSOLE_OVERRIDE: true,
  OSSEUS_SERVER_DEPENDENCIES: ['logger', 'mongo'],
  OSSEUS_SERVER_PORT: '8080',
  OSSEUS_SERVER_MORGAN_FORMAT: ':date[iso] method=":method", url=":url", statusCode=":status", route=":route", host=":host", client-ip=":client-ip", user-agent=":user-agent", httpVersion=":http-version", responseTime=":response-time"',
  OSSEUS_SERVER_ADD_HEALTHCHECK: true,
  OSSEUS_SERVER_ADD_IS_RUNNING: true,
  OSSEUS_ROUTER_DEPENDENCIES: ['logger', 'server'],
  OSSEUS_ROUTER_ROUTES_PATH: '/app/routes',
  OSSEUS_ROUTER_CONTROLLERS_PATH: '/app/controllers',
  OSSEUS_ROUTER_POLICY_PATH: '/app/middlewares',
  OSSEUS_ROUTER_URL_PREFIX: '/api',
  OSSEUS_ROUTER_JWT_SECRET: '',
  OSSEUS_MONGO_DEPENDENCIES: ['logger'],
  OSSEUS_MONGO_URI: 'mongodb://localhost:27017/funder',
  ETHEREUM_WEB3_PROVIDER: 'http://localhost:8545',
  ETHEREUM_HD_WALLET_MNEMONIC: 'talisman',
  ETHEREUM_HD_WALLET_INDEX: 9,
  WEB3_TOKEN_ABI_PATH: 'abi/FiatTokenV1.json',
  ETHEREUM_ADMIN_ACCOUNT: '0x18ee823334f216e4f8e0467c1092437edb927fdf',
  ETHEREUM_NATIVE_BONUS: '100000000000000000',
  ETHEREUM_TOKEN_ADDRESS: '0x1f55a28b10db292403e3e9146e52788d0d60e562',
  ETHEREUM_TOKEN_BONUS: '1e20',
  ETHEREUM_GAS_PER_TRANSACTION: 100000,
  ETHEREUM_ONE_TIME_FUNDING: true
}
