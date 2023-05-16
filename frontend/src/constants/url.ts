import { APP_URL } from './index'

/**
 * フロントエンド用の URL を作成する
 */

export const Url = {
  Top: [APP_URL, '/'].join(''),
  Product: [APP_URL, '/product/prod_NpvV9ohJIlgElI'].join(''),
  Payment: [APP_URL, '/product/prod_NpvV9ohJIlgElI/payment'].join(''),
  Cancel: [APP_URL, '/product/prod_NpvV9ohJIlgElI/cancel'].join(''),
}