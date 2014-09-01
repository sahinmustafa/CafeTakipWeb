Ext.define('app.controller.musteri.MusteriCont',{
    extend : 'Ext.app.Controller',
    views : ['musteri.MusteriEkleView', 'musteri.MusteriListView'],
    models : ['MusteriModel'],
    stores : ['MusteriStore']
});

