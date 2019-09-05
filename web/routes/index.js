import { Router } from 'express'; 


const router = Router()
 /**
  * '/cmd=ID/id=OBJECT whereas id is optional?
  * E.g ToggleAllLights() => No need to pass in all bulbs.
  * Need to store 'em though. Send command to all or those that are connected.
  * Need to keep track of those connected.
  */
router.get('/', (req, res) => {
    res.send('Hello World!')
})


/**
 * TESTING according to https://medium.com/@HolmesLaurence/integrating-node-and-python-6b8454bfc272
 */
router.get('/gambling', callD_alembert)


function callD_alembert(req, res) {
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue

  var spawn = require('child_process').spawn
  var process = spawn('python3', ['../../sys/example_call.py'])
}


export default router