
package com.crm.model;

import java.util.Date;


public class Musteri extends Kisi  {
    
    private int kredi;
    private int harcanan;
    private double borc;
    private int indirim;
    private String ucretSecenek;
    private String odemeSecenek;
    private Date bitisTarihi;
    
    public Musteri(){}
    
    public int getKredi(){
        return kredi;
    }
    
    public void setKredi(int kredi){
        this.kredi=kredi;
    }
    public int getHarcanan(){
        return harcanan;
    }
    
    public void setHarcanan(int harcanan){
        this.harcanan=harcanan;
    }
    public double getBorc(){
        return borc;
    }
    
    public void setBorc(double borc){
        this.borc=borc;
    }
    public int getIndirim(){
        return indirim;
    }
    
    public void setIndirim(int indirim){
        this.indirim=indirim;
    }
    public String getUcretSecenek(){
        return ucretSecenek;
    }
    
    public void setUcretSecenek(String ucretSecenek){
        this.ucretSecenek=ucretSecenek;
    }
    public String getOdemeSecenek(){
        return odemeSecenek;
    }
    
    public void setOdemeSecenek(String odemeSecenek){
        this.odemeSecenek=odemeSecenek;
    }
    public Date getBitisTarihi(){
        return bitisTarihi;
    }
    
    public void setBitisTarihi(Date bitisTarihi){
        this.bitisTarihi=bitisTarihi;
    }

    @Override
    public String toString() {
        return "Musteri{" + "kredi=" + kredi + ", harcanan=" + harcanan +
                ", borc=" + borc + ", indirim=" + indirim + ", ucretSecenek=" + ucretSecenek +
                ", odemeSecenek=" + odemeSecenek + ", bitisTarihi=" + bitisTarihi + '}';
    }
    
}



