(function () {

	var AccountList = function() {};

	AccountList.prototype.get = function(params, success, fail) {

		return Cordova.exec( 
			function(args) { success(args); }, 
			function(args) { fail(args);	},
			'AccountList', '', [params]);
	};


	/*
	* register plugin with Phonegap \ Cordova
	*/
	if (cordova.addPlugin) {
		cordova.addConstructor(function() {
			//Register the javascript plugin with Cordova
			cordova.addPlugin('AccountList', new AccountList());
		});
	} else {
		if (!window.plugins) {
			window.plugins = {};
		}
		window.plugins.AccountList = new AccountList();
	}


})();
