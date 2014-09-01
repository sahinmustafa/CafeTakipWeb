Ext.define('app.store.MusteriStore',{
    extend : 'Ext.data.Store',
    model : 'app.model.MusteriModel',
    
    proxy : {
        type : 'ajax',
        url : 'musteriList.html',
        
        reader : {
            type : 'json',
            root : 'data',
            successProperty : 'success',
            totalProperty : 'totalCount'
        }
    }
});

