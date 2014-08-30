Ext.define('app.store.UrunStore',{
    extend : 'Ext.data.Store',
    model : 'app.model.UrunModel',
    
    proxy : {
        type : 'ajax',
        url : 'urunList.html',
        reader : {
            type : 'json',
            root : 'data',
            successProperty : 'success',
            totalProperty : 'totalCount'
        }
    }
});