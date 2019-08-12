const { Router } = require('express') 


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



module.exports = router