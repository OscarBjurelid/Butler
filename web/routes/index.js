const { Router } = require('express')
const { PythonShell } = require('python-shell')



const router = Router()
 /**
	* '/cmd=ID/id=OBJECT whereas id is optional?
	* E.g ToggleAllLights() => No need to pass in all bulbs.
	* Need to store 'em though. Send command to all or those that are connected.
	* Need to keep track of those connected.
	*/
router.get('/', (req, res) => {
		res.render('home', {title: 'Butler', message: 'Welcome to Butler'})
})


router.get('/test', (req, res) => {

	let request = {
		cmd: req.query.cmd,
		obj: req.query.obj
	}

	let options = {
		mode: 'text',
		pythonOptions: ['-u'],
		scriptPath: '/home/oscar/Projects/shome/sys/',
		args: [request.cmd, request.obj]
	}

	PythonShell.run('example_call.py', options, (err, result) => {
		if (err) console.log("This is error: ", err)

		res.send(result)
	})
})


module.exports = router