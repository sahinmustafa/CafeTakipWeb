Ext.define('app.controller.menu.BilgisayarMenuCont',{
    extend : 'Ext.app.Controller',
    views : ['menu.BilgisayarMenu'],
    
    refs : {
        selector : 'bilgisayarMenu',
        ref : 'bilgisayarMenu'
    },
    
    init : function(){
        this.control({
            'bilgisayarMenu menu[action=masaAc]' : {
                click : this.masaAc
            },
            'bilgisayarMenu menu[action=masaBekleme]' : {
                click : this.masaBekleme
            },
            'bilgisayarMenu menu[action=masaKapat]' : {
                click : this.masaKapat
            },
            'bilgisayarMenu menu[action=masaAktar]' : {
                click : this.masaAktar
            },
            'bilgisayarMenu button[action=sureEkle]' : {
                click : this.sureUzat
            }
        });
    },
    
    masaAc : function(){
        
    },
    
    masaBekleme : function(){
        
    },
    
    masaKapat : function(){
        
    },
    
    masaAktar : function(){
        
    },
    
    sureUzat : function(){
        Ext.create('Ext.window.Window',{
            title : 'Sure Ekle',
            width : 300,
            height :100,
            buttonAlign : 'center',
            bodyPadding : 10,
            items : [Ext.create('Ext.slider.Single',{
                                                                            fieldLabel : 'Sure Ekle',
                                                                            minValue :  -120,
                                                                            maxValue : 120,
                                                                            value : 0,
                                                                            increment : 15,
                                                                            width : '100%'
                                                                        })
                    
                        ],
            buttons : [{
                                text : 'Ekle',
                                handler : function(){
                                    
                                }
                            },{
                                text : 'Vazgec',
                                handler : function(){ this.up('.window').close();}
                            }]
        }).show();
    }
});

