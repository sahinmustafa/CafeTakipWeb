Ext.define('app.store.CalisanStore',{
    extend : 'Ext.data.Store',
    model : 'app.model.CalisanModel',
    
    proxy : {
        type : 'ajax',
        url : 'calisanList.html',
        
        reader : {
            type : 'json',
            root : 'data',
            successProperty : 'success',
            totalProperty : 'totalCount'
        }
    }
    
});

