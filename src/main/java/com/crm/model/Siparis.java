

package com.crm.model;

import java.util.Date;


public class Siparis extends Urun {
    private int miktar;
    
public Siparis() {}

    public int getMiktar() {
        return miktar;
    }

    public void setMiktar(int miktar) {
        this.miktar = miktar;
    }

    @Override
    public String toString() {
        return "Siparis{" + "miktar=" + miktar + '}';
    }


    
}