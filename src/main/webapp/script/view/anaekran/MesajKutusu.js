Ext.define('app.view.anaekran.MesajKutusu',{
    extend : 'Ext.form.Panel',
    title : 'Mesajlar',
    alias : 'widget.mesajKutusu',
    bodyPadding : 5,
    
    initComponent : function(){
        this.items = [{
                                xtype : 'textarea',
                                name : 'mesajKutusu',
                                width : '100%',
                                height : '80%',
                                anchor : '0 -20'
                            },{
                              xtype : 'panel',
                              border : false,
                              layout : 'hbox',
                              height : '20%',
                              items : [{
                                            xtype : 'textfield',
                                            fieldLabel : 'Mesaj',
                                            width : '90%'
                                        },{
                                            xtype : 'button',
                                            text : 'Gonder',
                                            width : '10%',
                                            action : 'gonder',
                                            margin : '0 5 0 5'
                                        }]
                            }];
        this.callParent();
    }
});