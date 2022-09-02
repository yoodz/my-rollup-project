import foo from './foo.js'
import { version } from '../package.json'

export default function() {
    console.log(version, 'main-5')
    console.log(foo, 'main-4')
}