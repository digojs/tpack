﻿/**
 * @fileOverview 对象扩展
 * @author xuld <xuld@vip.qq.com>
 */

/**
 * 设置一个对象的属性值。
 * @param obj 要修改的对象。
 * @param key 要设置的属性名。
 * @param value 要设置的属性值。
 * @returns 返回已修改的对象。
 * @example setProperty({}, "myKey", "myValue")
 */
export function setProperty(obj: any, key: PropertyKey, value: any) {
    return Object.defineProperty(obj, key, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}

/**
 * 添加一个对象成员函数的回调函数。
 * @param obj 要修改的对象。
 * @param key 要更新的属性名。
 * @param callback 要添加的回调函数。
 */
export function addCallback(obj: any, key: string, callback: Function) {
    const old = obj[key];
    obj[key] = old ? function () {
        const ret1 = old.apply(this, arguments);
        const ret2 = callback.apply(this, arguments);
        return ret1 !== undefined ? ret1 : ret2;
    } : callback;
}
