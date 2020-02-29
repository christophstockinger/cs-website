'use strict'

/**
 * Script will generate all pattern files, using lodash templates
 * located in the same folder.
 *
 * Generated files are:
 *
 * src/pattern-type/pattern-name/
 * ├── index.js
 * ├── pattern-name.scss
 * ├── pattern-name.twig
 */

const Case = require('case')
const inquirer = require('inquirer')
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const _ = require('lodash')

const PATTERNS_FOLDER = './src/'
const TEMPLATE_FILES = [
  'template.index.js',
  'template.pattern.scss',
  'template.pattern.html.twig'
]
const TEMPLATE_FILES_PAGE = ['template.page.twig']
const PATTERN_TYPES = [
  {
    name: 'component',
    folder: 'components',
    namespace: 'c'
  },
  {
    name: 'module',
    folder: 'modules',
    namespace: 'm'
  }
]
const ONLY_KEBAB_CASE_CHARACTERS = /^[a-z-]+$/

function transformPatternName(name) {
  return name.toLowerCase()
}

function createPatternFile(templatePath, templateData, dest) {
  let success = true
  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) {
      console.error(
        `There was an error reading the template file at ${templatePath}`,
        err
      )
      success = false
    } else {
      const template = data.toString()
      const fileData = _.template(template, {
        interpolate: /<%=([\s\S]+?)%>/g
      })(templateData)
      fs.writeFile(dest, fileData, err => {
        if (err) {
          console.error(
            `There was an error writing the pattern file to ${dest}`,
            err
          )
          success = false
        }
      })
    }
  })
  return success
}

function createPatternFiles(templateData) {
  const isPage = templateData.type === 'page'
  let outputLines = []
  const templatesFiles = isPage ? TEMPLATE_FILES_PAGE : TEMPLATE_FILES
  templatesFiles.forEach(templateFilename => {
    const templateSrc = path.join(__dirname, templateFilename)
    const targetFilename = templateFilename
      .replace('template.', '')
      .replace('pattern', templateData.filename)
      .replace('page', templateData.filename)
    const dest = path.join(templateData.folder, `/${targetFilename}`)
    outputLines.push(targetFilename)
    createPatternFile(templateSrc, templateData, dest)
  })
  let output = `
🚀  Phew!
${outputLines.length} files successfully generated in
${templateData.folder}`
  outputLines.forEach((line, index) => {
    output += index < outputLines.length - 1 ? `\n├──` : `\n└──`
    output += `  ${line}`
  })
  if (!isPage) {
    output += `\n
☝️  Your next Todo:
Add ${templateData.name} to ./src/index.js
For more information see ./${templateData.folder}/index.js\n`
  }
  console.log(output)
}

function createPatternDir(folder) {
  let success = true
  if (!fs.existsSync(folder)) {
    mkdirp(folder, err => {
      if (err) {
        success = false
      }
    })
  } else {
    success = false
  }
  return success
}

function parseAnswers(answers) {
  // Input name like 'example-module-name'
  const patternName = transformPatternName(answers.name)
  // Transform into Pascal Case like 'ExampleModuleName'
  const patternNamePascal = _.upperFirst(_.camelCase(patternName))
  const patternType = answers.type
  const patternTypeFolder = _.find(PATTERN_TYPES, { name: patternType }).folder
  const patternNamespace = _.find(PATTERN_TYPES, { name: patternType })
    .namespace
  const patternFolder = path.join(
    PATTERNS_FOLDER,
    `${patternTypeFolder}/${patternName}`
  )

  const templateData = {
    namespace: patternNamespace,
    type: patternType,
    name: patternNamePascal,
    classname: `${patternNamespace}${patternNamePascal}`,
    nameKebab: patternName,
    folder: patternFolder,
    filename: `${patternName}`
  }

  const success = createPatternDir(patternFolder)
  if (!success) {
    console.error(
      `${patternNamePascal} ${
        templateData.type
      } folder '${patternName}' exists already\n${patternFolder}`
    )
  } else {
    createPatternFiles(templateData)
  }
}

const questions = [
  {
    name: 'type',
    type: 'list',
    message: 'Pattern type:',
    choices: PATTERN_TYPES.map(type => type.name),
    default: 'module'
  },
  {
    name: 'name',
    type: 'input',
    message: 'Pattern name:',
    validate: input => {
      let valid = true
      const isKebab = Case.of(input) === 'kebab'
      const isLower = Case.of(input) === 'lower'
      const containsDashes = input.indexOf('-') > -1

      if (input === '') {
        valid = 'Name must not be empty'
      } else if (!input.match(ONLY_KEBAB_CASE_CHARACTERS)) {
        valid = 'Only lowercase characters [a-z] and dashes are allowed'
      } else if (!isKebab && (isLower && containsDashes)) {
        valid = `Write name in Kebab Case like 'example-pattern-name'`
      } else if (input.startsWith('dhl')) {
        valid = `Name must not start with 'dhl' to prevent conflicts with DHL Design Components library`
      }

      return valid
    },
    transformer: input => {
      return transformPatternName(input)
    }
  }
]

inquirer
  .prompt(questions)
  .then(answers => {
    parseAnswers(answers)
  })
  .catch(err => {
    console.error('There was an error generating pattern files:', err)
  })
