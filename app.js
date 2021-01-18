import { Application } from 'stimulus'
import { Autocomplete } from 'stimulus-autocomplete'

const application = Application.start()

console.log("Autocomplete", Autocomplete)
application.register('autocomplete', Autocomplete)
