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
            },
            'anaMenu menuitem[action=musteriEkle]' : {
                click : this.musteriEkle
            },
            'anaMenu menuitem[action=musteriListesi]' :{
                click : this.musteriListesi
            },
            'anaMenu menuitem[action=kasiyerListesi]' : {
                click : this.kasiyerListesi
            },
            'anaMenu menuitem[action=kasiyerEkle]' : {
                click : this.kasiyerEkle
            }
        });
    },
    
    urunEkle : function(){
         this.getCenterTabPanel().centerTabEkle('app.view.urun.UrunEkleView', 'Urun Ekle','cid : 0');
    },
            
    urunListesi : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.urun.UrunListView', 'Urun Listesi', null);
    },
    
    musteriEkle : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.musteri.MusteriEkleView', 'Musteri Ekle', 'cid : 0');
    },
            
    musteriListesi : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.musteri.MusteriListView', 'Musteri Listesi', null);
    },
    
    kasiyerListesi : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.calisan.CalisanListView', 'Calisan Listesi',null);
    },
    
    kasiyerEkle : function(){
        this.getCenterTabPanel().centerTabEkle('app.view.calisan.CalisanEkleView', 'Calisan Ekle', 'cid : 0');
    }
});

