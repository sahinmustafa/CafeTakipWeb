
package com.crm.model;

import java.util.Date;


public class Sira extends Kisi {
    
    private int siraNo;
    private int masaNo;
    private Date baslangicSaati;
    private Date bitisSaati;
    
public Sira() {}

    public int getSiraNo() {
        return siraNo;
    }

    public void setSiraNo(int siraNo) {
        this.siraNo = siraNo;
    }

    public int getMasaNo() {
        return masaNo;
    }

    public void setMasaNo(int masaNo) {
        this.masaNo = masaNo;
    }

    public Date getBaslangicSaati() {
        return baslangicSaati;
    }

    public void setBaslangicSaati(Date baslangicSaati) {
        this.baslangicSaati = baslangicSaati;
    }

    public Date getBitisSaati() {
        return bitisSaati;
    }

    public void setBitisSaati(Date bitisSaati) {
        this.bitisSaati = bitisSaati;
    }

    @Override
    public String toString() {
        return "Sira{" + "siraNo=" + siraNo + ", masaNo=" + masaNo +
                ", baslangicSaati=" + baslangicSaati + ", bitisSaati=" + bitisSaati + '}';
    }


    
}
