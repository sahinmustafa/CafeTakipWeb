Ext.define('app.controller.menu.AnaMenuCont',{
    extend : 'Ext.app.Controller',
    views : ['menu.AnaMenu', 'CenterTabPanel'],
    
    refs : [{
            selector : 'anaMenu',
            ref : 'anaMenu'
    },{
                        selector : 'centerTabPanel',
                        ref : 'centerTabPanel'
                }],
    
    init : function(){
        this.control({
            'anaMenu menuitem[action=urunEkle]' : {
                click : this.urunEkle
            },
            'anaMenu menuitem[action=urunListesi]' : {
                click : this.urunListesi
            }
        });
    },
    
    urunEkle : function(){
         this.getCenterTabPanel().centerTabEkle('app.view.urun.UrunEkleView', 'Urun Ekle',0);
    },
            
    urunListesi : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.urun.UrunListView', 'Urun Listesi', null);
    }
});

