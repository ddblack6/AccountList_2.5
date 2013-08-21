AccountList_2.5
===============

AccountList Phonegap 2.5 Plugin for Android


Based https://github.com/phonegap/phonegap-plugins/tree/master/Android/AccountList



Adding the Plugin to your project
=================================

    To install the plugin, copy accountlist.js to your project's www folder and include a reference to it in your html files.

    <script type="text/javascript" src="accountlist.js"></script>

    Create a folder called 'com/seltzlab/mobile' within your project's src folder and copy AccountList.java file into that new folder.

    Add a plugin line to res/xml/plugins.xml
    <plugin name="AccountList" value="com.seltzlab.mobile.AccountList" />

    Add a permission line to the AndroidManifest.xml
    <uses-permission android:name="android.permission.GET_ACCOUNTS" />


Using the plugin
================
//Javascript

function AccountListFunction(){
	window.plugins.AccountList.get(
	        {
	            type: 'account type' // if not specified get all accounts
	                                 // google account example: 'com.google'
	        },
	        function (result) {
	        	
	            console.log(result[0]);
	            console.log(result[1]);
	            console.log(result[2]);
	            console.log(result[3]);
	            console.log(result[4]);
	            console.log(result[5]);
	            
	    
	        },
	        function (error) {
	            console.log(error);
	        }
	    );
}

//html
<a href="#" onclick="AccountListFunction()">Account List</a>
