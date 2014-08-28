Ext.define('app.view.KisiListesiView',{
    extend : 'Ext.grid.Panel',
    title : 'Kisi Listesi',
    alias : 'widget.kisiListV',
    initComponent : function(){
        var store = Ext.create('app.store.KisiStore');

        this.columns =[{	
                                        header : 'ID',
                                        dataIndex : 'id',
                                        flex : 1
                                },{
                                        header : 'Ad',
                                        dataIndex : 'ad',
                                        flex : 2
                                },{
                                        header : 'Soyad',
                                        dataIndex : 'soyad',
                                        flex : 2
                                },{
                                        header :'Yas',
                                        dataIndex : 'yas',
                                        flex : 1
                                },{
                                        header : 'Sehir',
                                        dataIndex : 'sehir',
                                        flex : 1
                                }];
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
                                    text : 'Yenile',
                                    action : 'yenile'
                            }];
        this.bbar = [{
                                    xtype : 'pagingtoolbar',
                                    pageSize : 10,
                                    store : store,
                                    displayInfo : false
                            }];
        this.selModel = Ext.create('Ext.selection.CheckboxModel');
        this.store = store;
        this.callParent();
    }	
});