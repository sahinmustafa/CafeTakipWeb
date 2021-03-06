Ext.define('app.view.CenterTabPanel',{
    extend : 'Ext.tab.Panel',
    activeTab : 0,
    alias : 'widget.centerTabPanel',
    layout : 'anchor',
    items : [{
                    xtype : 'anaEkranV',
                    closable : false
                }],
    
    panelVarmi : function(title){
        var titles = this.items.items;
        
        for(var i = 0; i < titles.length; i++){
            if (titles[i].title === title){
                return i;
            }
        }
        return -1;        
    },

    centerTabEkle : function(panel, title, id){
        var index = this.panelVarmi(title);
        if(index !== -1){
            this.setActiveTab(index);
            return;
        }
        
        var tabPage = Ext.create(panel, id);
        tabPage.title = title;
        tabPage.closable = true;

        this.add(tabPage);
        
        this.setActiveTab( this.items.items.length-1);
    },
    
    centerTabKaldir : function(){
        this.remove(this.activeTab);
    }
});