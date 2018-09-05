const fs = require('fs')
const archiver = require('archiver')
const path = require('path')
const pkg = require('../package.json')

const root = path.resolve(__dirname, '../')
const filename = `build-${pkg.version}.zip`
const src = path.join(root, '/dist')
const changelogFilename = 'CHANGELOG.md'
const changelogSrc = path.join(root, changelogFilename)
const dest = path.join(root, filename)

// create a file to stream archive data to.
var output = fs.createWriteStream(dest)
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
})

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
  // console.log(archive.pointer() + ' total bytes')
  // console.log(
  //   'archiver has been finalized and the output file descriptor has closed.'
  // )
  console.log(`🛳  Release preparation complete:
✔ Added ./dist/ folder to build archive
✔ Added ./CHANGELOG.md to build archive
✔ Generate build archive to ${dest}

☝️  Your next Todo:
Attach the generated build archive to the GitHub release.
`)
})

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function() {
  console.log('Data has been drained')
})

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn(err)
  } else {
    // throw error
    throw err
  }
})

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err
})

// pipe archive data to the file
archive.pipe(output)

// append a file
archive.file(changelogSrc, { name: changelogFilename })

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(src, false)

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
archive.finalize()