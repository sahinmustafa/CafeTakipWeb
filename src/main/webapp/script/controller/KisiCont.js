Ext.define('app.controller.KisiCont', {
    extend : 'Ext.app.Controller',
    views : ['KisiView', 
                'KisiListesiView', 
                'CenterTabPanel',
                'AraView'],
            
    models : ['KisiModel'],
    stores : ['KisiStore'],
    
    refs : [{
                        selector : 'kisiV',
                        ref : 'kisiV'
                },{
                        selector : 'kisiListV',
                        ref : 'kisiListV'
                },{
                        selector : 'centerTabPanel',
                        ref : 'centerTabPanel'
                },{
                    selector : 'araV',
                    ref : 'araV'
                }],
    init : function(){
            this.control({
                'kisiV' :{
                        beforerender : function(comp){
                            if(comp.cid !== '0' && comp.cid !== null){
                                        comp.getForm().load({
                                            url : 'kisiBilgiGetir.html',
                                            params : {
                                                 id : comp.cid
                                            }
                                        });
                                }
                        }			
                },			
                'kisiV button[action=kaydet]' : {
                        click : function(){ this.kaydetClick(); }
                },
                'kisiV button[action=vazgec]' : {
                        click : function(){ this.vazgecClick(); }
                },
                'kisiListV' : {
                        beforerender : function(comp){
                                comp.getStore().load({
                                        url : 'kisiList.html'
                                });
                        } 
                },
                'kisiListV button[action=ekle]' : {
                        click : this.yeniAc
                },
                'kisiListV button[action=sil]' : {
                        click : this.sil
                },
                'kisiListV button[action=guncelle]' : {
                        click : this.guncelle
                },
                'kisiListV button[action=yenile]' : {
                        click : function(){ this.yeniAc(); }
                },
                'araV button[action=ara]' : {
                        click : this.ara
                },
                'araV button[action=temizle]' : {
                        click : function(){ this.getAraV().getForm().reset();}
                }
        });		
    },

    yeniAc : function(){
        this.getCenterTabPanel().centerTabEkle('kisiV', 'Kisi Bilgisi Ekle', 0);
    },

    sil : function(){
        var rows = this.getKisiListV().getSelectionModel().getSelection();
        var store = this.getKisiListV().getStore();
        if(rows.length < 1){
                Ext.Msg.alert('Sil', 'En az bir satýr seçiniz!');
                return;
        }

        Ext.MessageBox.confirm('Sil', 'Silmek istediðinize emin misiniz ?', 
                function(yes_no_button){
                        if(yes_no_button === 'yes'){
                            var json = "[";

                            for(var i = 0 ; i < rows.length; i ++){
                                    var object = "{\"id\" : "+ rows[i].data.id + "}";
                                    if(i === 0)
                                            json += object;
                                    else
                                            json += ","+object;
                            }
                            json += "]";

                            Ext.Ajax.request({
                                waitMsg : 'SILINIYOR',
                                url : 'kisiSil.html',
                                params : { idList : json},
                                success : function(response){
                                        Ext.Msg.alert('Sil', 'Kisi bilgileri basari ile silindi');
                                        store.reload();
                                },
                                failure : function(response){
                                        var message = Ext.decode(response.responseText)['message'];
                                        Ext.Msg.alert('Sil', message);
                                }
                        });
                    }
                });
     },

    guncelle : function(comp){
        var rows = this.getKisiListV().getSelectionModel().getSelection();
        
        if(rows.length !== 1){
                Ext.Msg.alert('Guncelle', 'Lütfen bir satir seciniz!');
                return;
        }
        var id = rows[0].data.id;
        this.getCenterTabPanel().centerTabEkle('kisiV', 'Kisi Bilgisi Guncelle', id);
    },

    kaydetClick : function(){
        var store = this.getKisiListV().getStore();
        var centerTab = this.getCenterTabPanel();
        this.getKisiV().getForm().submit({
            url : 'kisiOlustur.html',      
            params : {id : this.getKisiV().form.findField('id').getValue()},
            success : function(){
                Ext.Msg.alert('Kisi Kayit', 'Kisi Bilgileri basari ile kayit edildi');
                store.reload();
                centerTab.centerTabKaldir();
            },
            failure : function(){
                alert('aa');
            }
        });
    },

    vazgecClick : function(){
            this.getKisiV().getForm().reset();
    },
    
    ara : function(){
        var araFrm = this.getAraV().getForm();
        
        this.getKisiListV().getStore().load({
            url : 'kisiAra.html',
            params : {
                id : araFrm.findField('id').getValue(),
                ad : araFrm.findField('ad').getValue()
            }
        });
    }
});