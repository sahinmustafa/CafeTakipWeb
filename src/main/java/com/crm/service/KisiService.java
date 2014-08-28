package com.crm.service;

import java.util.List;

import com.crm.model.Kisi;
import java.util.HashMap;

public interface KisiService {
	
    public void addKisi(HashMap params);
    public List<Kisi> allKisiList();
    public void kisiSil(String[] idList);
    public void kisiGuncelle(Kisi k);
    public Kisi getKisi(int id);
    public List<Kisi> kisiList(HashMap params);
}
