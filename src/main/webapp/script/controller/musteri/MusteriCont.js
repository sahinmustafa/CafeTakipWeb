Ext.define('app.controller.musteri.MusteriCont',{
    extend : 'Ext.app.Controller',
    views : ['musteri.MusteriEkleView', 'musteri.MusteriListView'],
    models : ['MusteriModel'],
    stores : ['MusteriStore'],
    
    refs : {
        selector : 'musteriListV',
        ref : 'musteriListV'
    },
    
    init : function(){
        this.control({
            'musteriListV' : {
                beforerender : function(comp){
                    comp.getStore().load({
                        url :'musteriList.html'
                    });
                }
            }
        });
        
    }
    
});

