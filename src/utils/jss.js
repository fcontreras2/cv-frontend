import {create} from 'jss'
import camelCase from 'jss-camel-case'
const jss = create();

jss.use(camelCase())
jss.createStyleSheet(
  {
      // "button" is a rule name, class is generated.
      button: {
        width: 100,
        height: 100
      }
    ,
    media: 'print'
  }
).attach()

export default jss;
