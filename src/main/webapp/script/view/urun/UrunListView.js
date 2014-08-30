Ext.define('app.view.urun.UrunListView',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.urunListV',
    title : 'Urun Listesi',
    iconCls : 'kafe_menu_liste_icon',
    
    initComponent : function(){
        this.columns = [{
                                    header : 'ID',
                                    dataIndex : 'id',
                                    flex : 1
                                },{
                                    header : 'Urun Adi',
                                    dataIndex : 'urunAdi',
                                    flex : 1
                                },{
                                    header : 'Barkod',
                                    dataIndex : 'barkod',
                                    flex : 1
                                },{
                                    header : 'Birim Fiyati',
                                    dataIndex : 'birimFiyati',
                                    flex : 1
                                },{
                                    header : 'Stok Miktari',
                                    dataIndex : 'stokMiktari',
                                    flex : 1
                                }];
        this.store = Ext.create('app.store.UrunStore');
        this.tbar = [{
                                    text : 'Ekle',
                                    action : 'ekle',
                                    iconCls : 'add_icon'
                            },{
                                    text : 'Guncelle',
                                    action : 'guncelle',
                                    iconCls : 'repeat_icon'
                            },{
                                    text : 'Sil',
                                    action : 'sil',
                                    iconCls : 'delete_icon'
                            }];
        this.bbar = [{
                                xtype : 'pagingtoolbar',
                                pageSize : 10,
                                store : this.store,
                                displayInfo : false
                            }];
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.callParent();
    }
});

