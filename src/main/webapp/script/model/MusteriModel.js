Ext.define('app.model.MusteriModel',{
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
                    name : 'telefon',
                    type : 'int'
                },{
                    name :'kulAdi',
                    type : 'string'
                },{
                    name : 'sifre',
                    type : 'string'
                },{
                    name : 'bitisTarih',
                    type : 'date'
                },{
                    name : 'kullanilanSure',
                    type : 'int'
                },{
                    name : 'kalanSure',
                    type : 'int'
                },{
                    name : 'borc',
                    type : 'int'
                },{
                    name : 'indirim',
                    type : 'int'
                },{
                    name : 'odemeSecenek',
                    type : 'string'
                },{
                    name : 'ucretSecenek',
                    type : 'string'
                }]
});

