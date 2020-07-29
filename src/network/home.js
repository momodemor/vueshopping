import { request } from './request'

export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(page, type) {
    return request({
        url: '/home/data',
        params: {
            page,
            type
        }
    })
}