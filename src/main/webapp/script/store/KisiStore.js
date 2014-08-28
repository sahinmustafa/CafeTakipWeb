Ext.define('app.store.KisiStore',{
	extend : 'Ext.data.Store',
	model : 'app.model.KisiModel',
	remoteSort : true,
	
	proxy : {
		type : 'ajax',
		url : 'kisiList.html',
		
		reader : {
			type : 'json',
			root : 'data',
			totalProperty: 'totalCount',
			successProperty : 'success'
		}
	}
});