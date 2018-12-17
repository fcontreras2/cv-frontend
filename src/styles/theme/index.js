import {create as createJss} from 'jss';
import vendorPrefixer from 'jss-vendor-prefixer'
import camelCase from 'jss-camel-case'

export const jss = createJss()
jss.use(camelCase(),vendorPrefixer())

export const generateClassName = (rule, sheet) => {
  let counter = 0
  return  `cv-${rule.key}-${counter++}`
}
