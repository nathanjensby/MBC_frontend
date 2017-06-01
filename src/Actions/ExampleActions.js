import AppDispatcher from '../Dispatchers/AppDispatcher';

var ExampleActions = {

	toggleSomeUIState: function() {
		this.dispatch('SOME_TOGGLE_CONSTANT');

		// An ajax call could go here to retrieve or persist the data...
	},

	dispatch: function(actionType) {
		// Dispatch the event, the appropriate Stores will do the rest.
		AppDispatcher.dispatch({
			action: {
				type: actionType
			}
		});
	}

};

export default ExampleActions;
