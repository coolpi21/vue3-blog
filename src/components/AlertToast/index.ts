import { createVNode, render } from 'vue'
import AlertToast from './AlertToast.vue'
export interface ToastProps {
  alertText: string
  alertType: string
}

export const defaultOpt = {
  duration: 1500,
  instanceTop: 40
}

let domID = 1
const Toast = (options: ToastProps) => {
  const container = document.createElement('div')
  container.className = 'customize-toast'
  const oldToastDomElement = document
    .querySelector(`#toast-${domID - 1}`)
    ?.querySelector('.message')
  if (oldToastDomElement) {
    const { top } = oldToastDomElement.getBoundingClientRect()
    defaultOpt.instanceTop = top + 65
  } else {
    defaultOpt.instanceTop = 40
  }

  container.id = `toast-${domID++}`
  const opt = { ...defaultOpt, ...options }
  const vm = createVNode(AlertToast, opt)
  render(vm, container)
  document.body.appendChild(container)
  const destoryToast = () => {
    // 淡入淡出效果之后删除dom节点
    render(null, container)
    document.body.removeChild(container)
  }

  if (opt.duration) {
    const timer = setTimeout(() => {
      destoryToast()
      clearTimeout(timer)
    }, opt.duration)
  }
}

export default Toast
