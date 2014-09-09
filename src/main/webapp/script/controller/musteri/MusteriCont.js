Ext.define('app.controller.musteri.MusteriCont',{
    extend : 'Ext.app.Controller',
    views : ['musteri.MusteriEkleView', 'musteri.MusteriListView'],
    models : ['MusteriModel'],
    stores : ['MusteriStore'],
    
    refs : [{
                    selector : 'musteriListV',
                    ref : 'musteriListV'
                },{
                    selector : 'musteriEkleV',
                    ref : 'musteriEkleV'
                }],
    
    init : function(){
        this.control({
            'musteriListV' : {
                beforerender : function(comp){
                    comp.getStore().load({
                        url :'musteriList.html'
                    });
                }
            },
            'musteriEkleV button[action=kaydet]' :{
                    click : this.kaydet
            } 
        });
        
    },
    
    kaydet : function(){
        var ucretSecenek =  this.getMusteriEkleV().form.findField('ucretSecenek').getChecked()[0].boxLabel;
        var odemeSecenek =  this.getMusteriEkleV().form.findField('odemeSecenek').getChecked()[0].boxLabel;
        
        this.getMusteriEkleV().getForm().submit({
            url : 'musteriEkle.html',
            params : {
                                id : this.getMusteriEkleV().form.findField('id').getValue(),
                                ucretSecenek : ucretSecenek,
                                odemeSecenek : odemeSecenek
                            },
            success : function(){
                Ext.Msg.alert('Musteri Kayit', 'Musteri Bilgileri basari ile kayit edildi');
            },
            failure : function(){
                Ext.Msg.alert("Kaydet", "Musteri bilgileri kayit edilirken bir hata olustu!");
            }
        });
    }
});

