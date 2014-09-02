Ext.define('app.view.calisan.CalisanListView',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.calisanListV',
    title : 'Calisan Listesi',
    iconCls : 'kasiyer_liste_icon',
    
    initComponent : function(){
        this.columns = [{
                                    header : 'ID',
                                    dataIndex : 'id',
                                    flex : 1
                                },{
                                    header : 'Adi',
                                    dataIndex : 'adi',
                                    flex : 1
                                },{
                                    header : 'Soyadi',
                                    dataIndex : 'soyad',
                                    flex : 1
                                },{
                                    header : 'Kullanici Adi',
                                    dataIndex : 'kulAdi',
                                    flex : 1
                                },{
                                    header : 'Telefon',
                                    dataIndex : 'telefon',
                                    flex : 1
                                },{
                                    header : 'Maas',
                                    dataIndex : 'maas',
                                    flex : 1
                                },{
                                    header : 'Adres',
                                    dataIndex : 'adres',
                                    flex : 2
                                },{
                                    header : 'Yetki',
                                    dataIndex : 'yetki',
                                    flex : 1
                                }];
        this.store = Ext.create('app.store.CalisanStore');
        this.tbar = [{
                                    text : 'Ekle',
                                    action : 'ekle',
                                    iconCls : 'add_icon'
                            },{
                                    text : 'Sil',
                                    action : 'sil',
                                    iconCls : 'delete_icon'
                            },
                            '->',{
                                xtype : 'textfield',
                                emptyText : 'Kullanici Adi',
                                id : 'ara',
                                width : '20%',
                                hidenLabel : true,
                                fieldLabel : 'Ara',
                                labelWidth : 20
                            },{
                                text : 'Gelismis Arama',
                                action : 'gelismisArama',
                                iconCls : 'ara_icon'
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

