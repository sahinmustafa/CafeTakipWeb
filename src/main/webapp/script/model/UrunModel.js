Ext.define('app.model.UrunModel',{
    extend : 'Ext.data.Model',
    fields : [{
                    name : 'id',
                    type : 'string'
                },{
                    name : 'urunAdi',
                    type : 'string'
                },{
                    name : 'barkod',
                    type : 'string'
                },{
                    name : 'birimFiyati',
                    type : 'float'
                },{
                    name : 'stokMiktari',
                    type : 'int'
                }]
});

