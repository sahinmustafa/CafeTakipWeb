Ext.define('app.store.BilgisayarStore',{
    extend : 'Ext.data.Store',
    model : 'app.model.BilgisayarModel',
    
    proxy: {
        type : 'ajax',
        url : 'bilgisayarList.html',
        reader : {
            type : 'json',
            root : 'data'
        }
    }
});