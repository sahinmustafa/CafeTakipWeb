Ext.define('app.model.KisiModel', {
	extend : 'Ext.data.Model',
	fields : [{ 
				name : 'id',
				type : 'string'
			},{
				name : 'ad',
				type : 'string'
			},{
				name : 'soyad',
				type : 'string'
			},{
				name : 'yas',
				type : 'int'
			},{
				name : 'sehir',
				type : 'string'
			}]	
});