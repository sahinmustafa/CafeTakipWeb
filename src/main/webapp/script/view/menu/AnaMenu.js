Ext.define('app.view.menu.AnaMenu',{
    extend : 'Ext.toolbar.Toolbar',
    alias : 'widget.anaMenu',
    initComponent : function(){
        this.items = [{
                        text : 'Bilgisayar',
                        iconCls : 'pc_menu_icon'
                    },{
                        text : 'Kafeterya',
                        iconCls : 'kafeterya_menu_icon',
                        menu : {
                            xtype : 'menu',
                            plain : false,
                            items : [{
                                text : 'Urun Ekle',
                                action : 'urunEkle',
                                iconCls : 'kafe_menu_ekle_icon'
                            },{
                                text : 'Urun Listesi',
                                action : 'urunListesi',
                                iconCls : 'kafe_menu_liste_icon'
                            }]
                        }
                    },{
                        text : 'Adisyon',
                        iconCls : 'adisyon_menu_icon'
                    },{
                        text : 'Musteri',
                        iconCls : 'musteri_menu_icon',
                        menu : {
                            xtype : 'menu',
                            plain : false,
                            items : [{
                                text : 'Musteri Ekle',
                                action : 'musteriEkle',
                                iconCls : 'musteri_ekle_icon'
                            },{
                                text : 'Musteri Listesi',
                                action : 'musteriListesi',
                                iconCls : 'musteri_liste_icon'
                            },{
                                text : 'Etkin Müsterileri Gör',
                                action : 'etkinMusteri',
                                iconCls : 'musteri_etkin_icon'
                            }]
                        }
                    },{
                        text : 'Kasiyer',
                        iconCls : 'kasiyer_menu_icon',
                        menu : {
                            xtype : 'menu',
                            plain : false,
                            items : [{
                                text : 'Kasiyer Ekle',
                                action : 'kasiyerEkle',
                                iconCls : 'kasiyer_ekle_icon'
                            },{
                                text : 'Kasiyer Listesi',
                                action : 'kasiyerListesi',
                                iconCls : 'kasiyer_liste_icon'
                            },{
                                text : 'Etkin Kasiyerli Gör',
                                action : 'etkinKasiyer'
                            }]
                        }
                    }];
        
        this.callParent();
    }
    
   
});

