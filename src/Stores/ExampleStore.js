import { EventEmitter } from 'events';
import AppDispatcher from '../Dispatchers/AppDispatcher';

// Object or array to save data to
var storage = {};

var ExampleStore = Object.assign({}, EventEmitter.prototype, {

	dispatcherId: AppDispatcher.register(payload => {
		var action = payload.action;

		// Do something on dispatcher events, like update the store.
		switch(action.type) {
			case 'SOME_EVENT_CONSTANT':
				// Perhaps some data just came from the server?
				_updateStoreFromServer(action.data);
				break;
		}

		// Store only emits from dispatcher callbacks
		ExampleStore.emit('change');
	})

});

// Private store methoss
function _updateStoreFromServer(data) {
	storage = data;
}

export default ExampleStore;
