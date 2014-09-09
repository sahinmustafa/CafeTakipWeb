package com.crm.model;

public class Kisi extends CafeObject{

	private String ad;
	private String soyad;
	
	public Kisi(){}
	
	public String getAd() {
		return ad;
	}
	public void setAd(String ad) {
		this.ad = ad;
	}
	public String getSoyad() {
		return soyad;
	}
	public void setSoyad(String soyad) {
		this.soyad = soyad;
	}


	@Override
	public String toString() {
		return "Kisi [ad=" + ad + ", soyad=" + soyad + "]";
	}
	
	
	
	
}
