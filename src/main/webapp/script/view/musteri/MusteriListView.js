
Ext.define('app.view.musteri.MusteriListView',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.musteriListV',
    title : 'Musteri Listesi'  ,
    
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
                                    text : 'Guncelle',
                                    action : 'guncelle',
                                    iconCls : 'repeat_icon'
                            },{
                                    text : 'Sil',
                                    action : 'sil',
                                    iconCls : 'delete_icon'
                            },{
                                xtype : 'textfield',
                                emptyText : 'Musteri Ara',
                                id : 'ara',
                                hidenLabel : true
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

