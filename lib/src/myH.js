import { h as oldH } from '@stencil/core'

const registration = {}
const registerTransform = function (originalName, newName) {
  registration[originalName] = newName
}

const h = function (nodeName, vnodeData, ...children) {
  if (registration[nodeName]) {
    nodeName = registration[nodeName]
  }

  return oldH(nodeName, vnodeData, ...children)
}

export { h, registerTransform }
