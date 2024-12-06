'use strict'

import { series } from 'gulp'
import { IconBuilder } from './src/icon.builder.js'

const builder = new IconBuilder()

const clean = () => builder.clean()

const build = () => builder.build()

export { clean, build }
export default series(clean, build)
