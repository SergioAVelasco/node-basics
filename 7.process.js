// args
console.log(process.argv)

// process control and exit
process.exit()
// 0 - success
// 1 - failure

// we can control process events
process.on('beforeExit', (code) => {
  console.log('before exit')
  console.log(code)
})

// current working directory
console.log(process.cwd())

// environment variables
console.log(process.env)
console.log(process.env.USERNAME)

// process id
console.log(process.pid)
