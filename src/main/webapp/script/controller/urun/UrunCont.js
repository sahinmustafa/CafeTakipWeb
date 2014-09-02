Ext.define('app.controller.urun.UrunCont',{
    extend : 'Ext.app.Controller',
    views : ['urun.UrunEkleView', 'urun.UrunListView'],
    models : ['UrunModel'],
    stores : ['UrunStore'],
    
    refs : [{
                selector : 'urunEkleV',
                ref : 'urunEkleV'
            },{
                selector : 'urunListV',
                ref : 'urunListV'
            }],
    
    init : function(){
        this.control({
            'urunEkleV' : {
                beforerender : function(comp){
                    if(comp.cid !== 0 && comp.cid !== null){
                        comp.form.load({
                            url : 'urunBilgisiHtml',
                            params : {
                                id : comp.cid
                            }
                        });
                    }
                }
            },
            'urunEkleV button[action=kaydet]' : {
                click : this.kaydet
            },
            'urunEkleV button[action=temizle]' : {
                click : this.temizle
            },
            'urunListV' : {
                beforerender : function(comp){
                    comp.store.load({
                        url : 'urunList.html'
                    });
                }
            },
            'urunListV button[action=ekle]' : {
                click : this.ekle
            },
            'urunListV button[action=sil]' : {
                click : this.sil
            },
            'urunListV, button[action=guncelle]' : {
                click : this.guncelle
            },
            'urunListV textfield' : {
                specialkey : this.ara
            }
        });
    },
    
    kaydet : function(){
        
    },
        
    temizle : function(){
        
    },
    ekle : function(){
        alert('ekle');
    },
    sil : function(){
        
    },
    guncelle : function(){
        
    },
    ara : function(ths,e){
        if(Ext.EventObject.getKey() === 13)
           Ext.Msg.alert('Urun Ara', 'Arama sonucu bulunmadi!');
    }
});

