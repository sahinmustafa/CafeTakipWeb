
Ext.define('app.view.musteri.MusteriListView',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.musteriListV',
    title : 'Musteri Listesi'  ,
    iconCls : 'musteri_liste_icon',
    initComponent : function(){
        this.columns = [{
                                    header : 'ID',
                                    dataIndex : 'id',
                                    flex : 0.8
                                },{
                                    header : 'Adi',
                                    dataIndex : 'ad',
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
                                    header : 'Bitis Tarihi',
                                    dataIndex : 'bitisTarih',
                                    flex : 1
                                },{
                                    header : 'Borc',
                                    dataIndex : 'borc',
                                    flex : 0.5
                                },{
                                    header : 'Indirim',
                                    dataIndex : 'indirim',
                                    flex : 0.5
                                }];
        this.store = Ext.create('app.store.MusteriStore');
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

