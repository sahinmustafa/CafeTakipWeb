
package com.crm.model;


public class CafeObject {
    
    private int COid;
    private boolean silinmis;
    
public CafeObject () {}

    public int getCOid() {
        return COid;
    }

    public void setCOid(int COid) {
        this.COid = COid;
    }

    public boolean isSilinmis() {
        return silinmis;
    }

    public void setSilinmis(boolean silinmis) {
        this.silinmis = silinmis;
    }

    @Override
    public String toString() {
        return "CafeObject{" + "COid=" + COid + ", silinmis=" + silinmis + '}';
    }


    
}
